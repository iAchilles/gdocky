import Controller   from '@ember/controller';
import { computed } from '@ember/object';
import { get }      from '@ember/object';

export default Controller.extend({

    fields: computed('model', function () {
        return get(this, 'model.possibleTypes').sortBy('name');
    })
});
