window.define = System.amdDefine;
window.require = System.amdRequire;

System.config({
    baseURL: "App",

    map: {
        text: "../Scripts/text.js",
        app: "app.js",
        main: "main.js",
        aes: "../../../Scripts/aes.js",
        jquery: "../../../Scripts/kendo/2016.2.714/jquery.min.js",
        kendo: "vendor/kendo/kendo.js"
    },

    paths: {
        'kendo.*': "../../../Scripts/kendo/2016.2.714/kendo.*.js"
    },

    meta: {
        'main': { deps: ["jquery"] },
        'jquery': { exports: ["jQuery", "$"], format: "global" },
        'aes': { exports: "aes", format: "global" }
    }
});

System.import("main");