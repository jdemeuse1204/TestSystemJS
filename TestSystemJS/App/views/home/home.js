define([
    'views/home/home.html!text'
], function (homeTemplate) {

    var viewModel = kendo.observable({
        title: "Home"
    })

    var view = new kendo.View(homeTemplate, {
        model: viewModel,
        show: function () {
            kendo.fx(this.element).fade('in').duration(500).play();
        }
    });

    return view;

});
