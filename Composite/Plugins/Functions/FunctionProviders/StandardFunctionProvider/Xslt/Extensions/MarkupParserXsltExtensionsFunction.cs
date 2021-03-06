﻿using System.IO;
using System.Xml.XPath;
using Composite.Core.Xml;
using Composite.Functions;
using Composite.Plugins.Functions.FunctionProviders.StandardFunctionProvider.Foundation;


namespace Composite.Plugins.Functions.FunctionProviders.StandardFunctionProvider.Xslt.Extensions
{
    internal sealed class MarkupParserXsltExtensionsFunction : StandardFunctionBase
    {
        public MarkupParserXsltExtensionsFunction(EntityTokenFactory entityTokenFactory)
            : base("MarkupParser", "Composite.Xslt.Extensions", typeof(IXsltExtensionDefinition), entityTokenFactory)
        {
        }


        public override object Execute(ParameterList parameters, FunctionContextContainer context)
        {
            return new XsltExtensionDefinition<MarkupParserXsltExtensions>
            {
                EntensionObject = new MarkupParserXsltExtensions(),
                ExtensionNamespace = "#MarkupParserExtensions"
            };
        }


        internal class MarkupParserXsltExtensions
        {
            public XPathNavigator ParseWellformedDocumentMarkup(string wellformedMarkupString)
            {
                using (StringReader sr = new StringReader(wellformedMarkupString))
                {
                    XPathDocument doc = new XPathDocument(sr);
                    return doc.CreateNavigator();
                }
            }



            public XPathNavigator ParseXhtmlBodyFragment(string xhtmlBodyFragmentString)
            {
                using (StringReader sr = new StringReader(string.Format("<html xmlns='{0}'><head /><body>{1}</body></html>", Namespaces.Xhtml, xhtmlBodyFragmentString)))
                {
                    XPathDocument doc = new XPathDocument(sr);
                    return doc.CreateNavigator();
                }
            }

        }
    }
}
