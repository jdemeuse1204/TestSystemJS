using System.Web;
using System.Web.Optimization;

namespace TestSystemJS
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();

            bundles.Add(
                new StyleBundle("~/Content/css")
                    .Include("~/Content/kendo/2016.2.714/kendo.default.min.css")
                    .Include("~/Content/kendo/2016.2.714/kendo.default.mobile.min.css")
                    .Include("~/Content/kendo/2016.2.714/kendo.common.min.css")
                );
        }
    }
}
