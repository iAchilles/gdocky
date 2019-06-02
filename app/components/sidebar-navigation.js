import Component             from '@ember/component';
import Types                 from 'gdocky/dictionaries/types';
import { computed }          from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

    router: service(),

    types: computed(function () {
        return Types;
    })

});
