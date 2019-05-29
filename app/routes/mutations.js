import Route from '@ember/routing/route';

export default Route.extend({

    renderTemplate(controller, model) {
        let cntrl = this.controllerFor('mutations.index');
        this.render('mutations/index-header-outlet', {
            outlet: 'header-outlet',
            controller: cntrl
        });

        this._super(controller, model);
    }
});
