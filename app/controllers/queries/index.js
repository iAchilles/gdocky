import Controller        from '@ember/controller';
import { get, computed } from '@ember/object';

export default Controller.extend({

    queryParams: [ 'anchor' ],

    description: computed(function () {
        let query = get(this, 'model.__schema.types').findBy('name', 'Query');

        return get(query, 'description');
    }),

    title: computed(function () {
        let query = get(this, 'model.__schema.types').findBy('name', 'Query');

        return get(query, 'name');
    }),

    fields: computed(function () {
        return get(get(this, 'model.__schema.types').findBy('name', 'Query'), 'fields').sortBy('name');
    })
});
