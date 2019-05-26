import Component    from '@ember/component';
import Types        from 'gdocky/dictionaries/types';
import { computed } from '@ember/object';

export default Component.extend({

    types: computed(function () {
        return Types;
    })
});
