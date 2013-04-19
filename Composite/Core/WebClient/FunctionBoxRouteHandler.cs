﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Routing;
using Composite.C1Console.Drawing;
using Composite.C1Console.Security;
using Composite.Core.Extensions;


namespace Composite.Core.WebClient
{
    internal class FunctionBoxRoute : Route
    {
        // Adding "x" as a fictional paramter, so MVC wouldn't use this route for producing outbound links
        public FunctionBoxRoute() : base("Renderers/FunctionBo{x}", new FunctionBoxRouteHandler()) { }
    }

    
    internal class FunctionBoxRouteHandler : IRouteHandler
    {
        public System.Web.IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            return new FunctionBoxHttpHandler();
        }
    }


    /// <summary>
    /// Renders image that shows information about a function information in Visual Editor
    /// </summary>
    internal class FunctionBoxHttpHandler : IHttpHandler
    {
        private const int _minCharsPerDescriptionLine = 50;


        public void ProcessRequest(HttpContext context)
        {
            if (!UserValidationFacade.IsLoggedIn())
            {
                return;
            }

            try
            {
                string title = context.Request["title"];

                Verify.That(!title.IsNullOrEmpty(), "Missing query string argument 'title'");

                string boxtype = context.Request["type"];
                Verify.That(!boxtype.IsNullOrEmpty(), "Missing query string argument 'boxtype'");

                IEnumerable<string> existingTemplateImages = new[] { "html", "function", "warning" };
                Verify.That(existingTemplateImages.Contains(boxtype),
                    "Query string argument 'boxtype' expected to be one of the following values: " + string.Join(", ", existingTemplateImages));

                string description = context.Request["description"];

                List<string> lines = new List<string>();
                if (!description.IsNullOrEmpty())
                {
                    description = UrlUtils.UnZipContent(description);

                    foreach (string naturalLine in description.Split('\n'))
                    {
                        if (naturalLine.Length == 0) lines.Add("");

                        string rest = naturalLine.Trim();

                        while (rest.Length > _minCharsPerDescriptionLine && rest.IndexOf(' ') > -1)
                        {
                            int firstSpaceIndex = rest.LastIndexOf(' ', _minCharsPerDescriptionLine);

                            if (firstSpaceIndex == -1) firstSpaceIndex = rest.IndexOf(' ');

                            if (firstSpaceIndex > -1)
                            {
                                lines.Add(rest.Substring(0, firstSpaceIndex));
                                rest = rest.Substring(firstSpaceIndex + 1).Trim();
                            }
                        }

                        if (rest.Length > 0)
                        {
                            lines.Add(rest);
                        }
                    }
                }

                string filePath = context.Server.MapPath(UrlUtils.ResolveAdminUrl(string.Format("images/{0}box.png", boxtype)));



                Bitmap bitmap = (Bitmap)Bitmap.FromFile(filePath);

                ImageTemplatedBoxCreator imageCreator = new ImageTemplatedBoxCreator(bitmap, new Point(55, 40), new Point(176, 78));

                imageCreator.MinHeight = 50;

                int textLeftPadding = (boxtype == "function" ? 30 : 36);

                imageCreator.SetTitle(title, new Point(textLeftPadding, 9), new Point(70, 15), Color.Black, "Tahoma", 8.0f, FontStyle.Bold);
                imageCreator.SetTextLines(lines, new Point(textLeftPadding, 0), new Point(100, 80), Color.Black, "Tahoma", 8.0f, FontStyle.Regular);

                context.Response.ContentType = "image/png";
                context.Response.Cache.SetExpires(DateTime.Now.AddDays(10));

                Bitmap boxBitmap = imageCreator.CreateBitmap();
                MemoryStream ms = new MemoryStream();
                boxBitmap.Save(ms, ImageFormat.Png);

                ms.WriteTo(context.Response.OutputStream);
            }
            catch (Exception ex)
            {
                Log.LogError(this.GetType().ToString(), ex.ToString());
                throw;
            }
        }


        public bool IsReusable
        {
            get { return true; }
        }

    }
}