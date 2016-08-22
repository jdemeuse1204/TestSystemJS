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

    // packages tells the System loader how to load when no filename and/or no extension
    //var packages = {
    //    'app': { main: 'main.js', defaultExtension: 'js' },
    //    'rxjs': { defaultExtension: 'js' },
    //    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    //};

    //var ngPackageNames = [
    //  'common',
    //  'compiler',
    //  'core',
    //  'forms',
    //  'http',
    //  'platform-browser',
    //  'platform-browser-dynamic',
    //  'router',
    //  'router-deprecated',
    //  'upgrade',
    //];

    //// Individual files (~300 requests):
    //function packIndex(pkgName) {
    //    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    //}

    //// Bundled (~40 requests):
    //function packUmd(pkgName) {
    //    pac
    //    kages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    //}
    //// Most environments should use UMD; some (Karma) need the individual index files
    //var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    //// Add package entries for angular packages
    //ngPackageNames.forEach(setPackageConfig);

    var config = {
        baseURL: "App",
        map: map,
        paths: paths,
        meta: meta
    };

    System.config(config);
    System.import("main"); // starts the application

})(this);
