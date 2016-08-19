require.config({
    baseUrl: "App",
    deps: ["main"],
    paths: {
        'text': '../Scripts/text',
        'kendo': 'vendor/kendo/kendo',
        'app': 'app',
        'main': "main",
        'jquery': "../../../Scripts/kendo/2016.2.714/jquery.min"
    },
    shim: {
        'app': {
            deps: ['kendo', 'jquery']
        },
        'jquery': { exports: ["jQuery", "$"] }
    }
});
