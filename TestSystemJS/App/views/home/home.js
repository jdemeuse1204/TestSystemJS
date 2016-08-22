define([
    'views/home/home.html!text',
    "k/kendo.datepicker.min.js"
], function (homeTemplate) {

    var viewModel = kendo.observable({
        title: "Home"
    })

    var view = new kendo.View(homeTemplate, {
        model: viewModel,
        show: function () {
            debugger;
            var test = $("#testddl").kendoDatePicker().data("kendoDatePicker");

            kendo.fx(this.element).fade('in').duration(500).play();
        }
    });

    return view;

});
