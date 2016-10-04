System.config({
    baseURL: "App",
    defaultJSExtensions: true,
    packages: {
        pages: {
            main: 'views/*.html',
            format: 'amd',
            defaultExtension: 'html'
        }
    },
    map: {
        text: "./TestSystemJS/Scripts/text.js",
        app: "./TestSystemJS/App/app.js",
        main: "./TestSystemJS/App/main.js",
        aes: "./TestSystemJS/Scripts/aes.js",
        jquery: "./TestSystemJS/Scripts/kendo/2016.2.714/jquery.min.js",
        kendo: "./TestSystemJS/App/vendor/kendo/kendo.js",
        DataTables: "./TestSystemJS/Scripts/datatables.js",
        k: "./TestSystemJS/Scripts/kendo/2016.2.714"
    },
    paths: {
        'kendo.*': "./TestSystemJS/Scripts/kendo/2016.2.714/kendo.*.js",
        jquery: "./TestSystemJS/Scripts/kendo/2016.2.714/jquery.min.js",
        bootstrap: "./TestSystemJS/Scripts/bootstrap.js",
        text: "./TestSystemJS/Scripts/text.js"
    },
    meta: {
        main: { deps: ["jquery"] },
        jquery: { exports:"$", format: "global" },
        kendo: { deps: ["jquery"] },
        DataTables: { deps: ["jquery"], exports: "$.fn.DataTable" },
        'App/*.js': { format: "amd" }
    }
});