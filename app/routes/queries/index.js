import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.modelFor('application');
    },

    renderTemplate(controller, model) {

        this.render('queries/index-header-outlet', {
            into: 'application',
            outlet: 'header-outlet',
            controller: controller
        });

        this._super(controller, model);
    },

    resetController: function (controller) {
        let queryParams = controller.get('queryParams');
        queryParams.forEach(function (param) {
            controller.set(param, null);
        });
    }
});
