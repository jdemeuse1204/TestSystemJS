/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

    window.define = System.amdDefine;
    window.require = System.amdRequire;

    var kendoVersion = "2016.2.714";


    // map tells the System loader where to look for things
    var map = {
        text: "../Scripts/text.js",
        app: "app.js",
        main: "main.js",
        aes: "../../../Scripts/aes.js",
        jquery: "../../../Scripts/kendo/" + kendoVersion + "/jquery.min.js",
        kendo: "vendor/kendo/kendo.js",
        DataTables: "../../../Scripts/datatables.js",
        k: "../../../Scripts/kendo/" + kendoVersion + "/"
    };

    var paths = {
        'kendo.*': "../../../Scripts/kendo/" + kendoVersion + "/kendo.*.js",
        jquery: "../../../Scripts/kendo/" + kendoVersion + "/jquery.min.js",
        bootstrap: "../../../Scripts/bootstrap.js"
    };

    var meta = {
        main: { deps: ["jquery"] },
        jquery: { exports: ["jQuery", "$"], format: "global" },
        kendo: { deps: ["jquery"] },
        DataTables: { deps: ["jquery"], exports: "$.fn.DataTable" }
    };


    // package name has no bearing on path used with
    // when referencing the script
    var packages = {
        pages: {
            main: 'views/*.html',
            format: 'amd',
            defaultExtension: 'html'
        }
    };

    var config = {
        baseURL: "App",
        defaultJSExtensions: true,
        packages: packages,
        map: map,
        paths: paths,
        meta: meta
    };

    System.config(config);
    System.import("main"); // starts the application

})(this);
