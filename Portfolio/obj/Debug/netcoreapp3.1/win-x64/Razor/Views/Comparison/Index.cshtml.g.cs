#pragma checksum "/Users/olivermcmillan/Documents/RiderProjects/Development/Portfolio/Portfolio/Views/Comparison/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "911d92d9bcc2b3e54b8c435ddc6d603afbf76bba"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Comparison_Index), @"mvc.1.0.view", @"/Views/Comparison/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/olivermcmillan/Documents/RiderProjects/Development/Portfolio/Portfolio/Views/_ViewImports.cshtml"
using Portfolio;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/olivermcmillan/Documents/RiderProjects/Development/Portfolio/Portfolio/Views/_ViewImports.cshtml"
using Portfolio.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "/Users/olivermcmillan/Documents/RiderProjects/Development/Portfolio/Portfolio/Views/Comparison/Index.cshtml"
using Portfolio.Utils;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"911d92d9bcc2b3e54b8c435ddc6d603afbf76bba", @"/Views/Comparison/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c04bce7982831a5298dbaf0154894cf857e44535", @"/Views/_ViewImports.cshtml")]
    public class Views_Comparison_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ComparisonViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 4 "/Users/olivermcmillan/Documents/RiderProjects/Development/Portfolio/Portfolio/Views/Comparison/Index.cshtml"
  
    ViewBag.Title = "Comparison Demo";
    Layout = "_Layout";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<div id=\"comparisonRoot\">\n</div>\n\n<script>\n    var json = ");
#nullable restore
#line 13 "/Users/olivermcmillan/Documents/RiderProjects/Development/Portfolio/Portfolio/Views/Comparison/Index.cshtml"
          Write(Html.Raw(Model.Session.SerializeAsJsonString()));

#line default
#line hidden
#nullable disable
            WriteLiteral(";\n    \n    function initPage() {\n        var pageRoot = document.querySelector(\"#comparisonRoot\");\n        ReactDom.render(React.createElement(Portfolio.ComparisonPage, json), pageRoot);\n    }\n\n    window.addEventListener(\"load\", initPage);\n</script>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ComparisonViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
