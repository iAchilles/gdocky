import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.modelFor('application');
    },

    renderTemplate(controller, model) {
        this.render('directives/index-header-outlet', {
            outlet: 'header-outlet',
            controller: controller,
            into: 'application'
        });

        this._super(controller, model);
    }

});
