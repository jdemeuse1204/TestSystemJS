define([
    'views/details/details.html!text'
], function (detailsTemplate) {

    var viewModel = kendo.observable({
        title: 'Details'
    });

    var view = new kendo.View(detailsTemplate, {
        model: viewModel,
        show: function (e) {
            kendo.fx(this.element).fade('in').duration(500).play();
        }
    });

    return view;

});
