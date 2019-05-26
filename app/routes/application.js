import Route                        from '@ember/routing/route';
import { get }                      from '@ember/object';
import { inject as service }        from '@ember/service';
import ENV                          from 'gdocky/config/environment';
import { default as introspection } from 'gdocky/gql/queries/introspection';

export default Route.extend({

    apollo: service(),

    intl: service(),

    beforeModel() {
        this._super(...arguments);
        let lang = ENV.lang;
        let intl = get(this, 'intl');
        intl.setLocale([ lang ]);
    },

    model() {
        return get(this, 'apollo').query({ query: introspection });
    }
});
