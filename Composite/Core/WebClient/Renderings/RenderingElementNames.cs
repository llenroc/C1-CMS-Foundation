﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using Composite.Core.Xml;

namespace Composite.Core.WebClient.Renderings
{
    /// <summary>
    /// </summary>
    /// <exclude />
    [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)] 
	public static class RenderingElementNames
	{
        /// <exclude />
        public static XName PlaceHolder { get { return _placeholder; } }

        /// <exclude />
        public static XName PlaceHolderIdAttribute { get { return "id"; } }

        /// <exclude />
        public static XName PlaceHolderTitleAttribute { get { return "title"; } }

        /// <exclude />
        public static XName PlaceHolderDefaultAttribute { get { return "default"; } }


        /// <exclude />
        public static XName PageTitle { get { return _pageTitle; } }

        /// <exclude />
        public static XName PageAbstract { get { return _pageAbstract; } }

        /// <exclude />
        public static XName PageMetaTagDescription { get { return _pageMetaTagDescription; } }


        private static XName _placeholder = Namespaces.Rendering10 + "placeholder";
        private static XName _pageTitle = Namespaces.Rendering10 + "page.title";
        private static XName _pageAbstract = Namespaces.Rendering10 + "page.description";
        private static XName _pageMetaTagDescription = Namespaces.Rendering10 + "page.metatag.description";
    }
}
