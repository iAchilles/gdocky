import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.modelFor('application');
    },

    resetController: function (controller) {
        let queryParams = controller.get('queryParams');
        queryParams.forEach(function (param) {
            controller.set(param, null);
        });
    }
});
