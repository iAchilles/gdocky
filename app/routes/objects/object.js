import Route   from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({

    model(params) {
        let model = this.modelFor('application');

        return get(model, '__schema.types').findBy('name', get(params, 'name'));
    },

    renderTemplate(controller, model) {

        this.render('objects/object-header-outlet', {
            into: 'application',
            outlet: 'header-outlet',
            controller: controller
        });

        this._super(controller, model);
    }

});
