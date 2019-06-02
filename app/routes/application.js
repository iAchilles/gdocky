import Route                        from '@ember/routing/route';
import { get }                      from '@ember/object';
import { inject as service }        from '@ember/service';
import ENV                          from 'gdocky/config/environment';
import fetch                        from 'fetch';
import { introspectionQuery }       from 'graphql';

export default Route.extend({

    intl: service(),

    beforeModel() {
        this._super(...arguments);
        let intl     = get(this, 'intl');
        let detected = navigator.language || navigator.userLanguage;
        detected     = detected.toLowerCase();
        let language = (detected === 'ru-ru' || detected === 'en-us') ? detected : 'en-us';

        return intl.setLocale([ language ]);
    },


    model() {
        const schemaUrl = ENV.schemaUrl;
        const body      = {
            operationName: 'IntrospectionQuery',
            query: introspectionQuery
        }

        return fetch(schemaUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json().then(function (response) {
                   return get(response, 'data');
                });
            });
    }
});
