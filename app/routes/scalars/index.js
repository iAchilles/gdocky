import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.modelFor('application');
    },

    renderTemplate(controller, model) {

        this.render('objects/index-header-outlet', {
            into: 'application',
            outlet: 'header-outlet',
            controller: controller
        });

        this._super(controller, model);
    }

});
