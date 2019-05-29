import Route from '@ember/routing/route';

export default Route.extend({

    renderTemplate(controller, model) {
        let cntrl = this.controllerFor('queries.index');
        this.render('queries/index-header-outlet', {
            outlet: 'header-outlet',
            controller: cntrl
        });

        this._super(controller, model);
    }
});
