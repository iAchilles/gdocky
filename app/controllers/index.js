import Controller               from '@ember/controller';
import { computed }             from '@ember/object';
import ENV                      from 'gdocky/config/environment';
import { get }                  from '@ember/object';
import Types                    from 'gdocky/dictionaries/types';

export default Controller.extend({

    apiUrl: computed(function () {
        return get(ENV, 'schemaUrl');
    }),

    types: computed(function () {
        return Types;
    })
});
