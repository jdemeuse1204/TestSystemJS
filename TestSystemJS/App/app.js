define([
    'views/layout/layout.js',
    'views/home/home.js',
    'views/details/details.js'
], function (layout, home, details) {
    debugger;
    // the application router4
    var router = new kendo.Router({
        init: function () {
        
            // render the layout first
            layout.render("#applicationHost");
        },
        routeMissing: function (e) {
        
            // debug shim writes console errors to the browser dev tools
            debug.error('No Route Found', e.url);
        },
        
        change: function (e) {
            
        }
    });

    // Add new routes here...
    
    router.route('/', function (e) {
        layout.showIn("#content", home);
    });

    router.route('/details', function (e) {
        layout.showIn("#content", details);
    });

    return router;

});