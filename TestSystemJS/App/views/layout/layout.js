define([
    'text!views/layout/layout.html'
], function (layoutTemplate) {

    var nav;

    // these links populate the navbar
    var viewModel = kendo.observable({
        links: [{ title: 'Home', href: '#/', icon: 'home', icon: 'fa fa-home' },
                { title: 'Details', href: '#/details', icon: 'fa fa-ellipsis-h' }]
    });

    var layout = new kendo.Layout(layoutTemplate, {
        model: viewModel,
        init: function (e) {
            // cache a reference to the nav links element
            nav = e.sender.element.find('#nav-links');
        }
    });   

    return layout;

});