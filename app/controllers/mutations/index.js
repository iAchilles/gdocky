import Controller   from '@ember/controller';
import { get }      from '@ember/object';
import { computed } from '@ember/object';

export default Controller.extend({

    queryParams: [ 'anchor' ],

    description: computed(function () {
        let mutation = get(this, 'model.__schema.types').findBy('name', 'Mutation');

        return get(mutation, 'description');
    }),

    title: computed(function () {
        let mutation = get(this, 'model.__schema.types').findBy('name', 'Mutation');

        return get(mutation, 'name');
    }),

    fields: computed(function () {
        return get(get(this, 'model.__schema.types').findBy('name', 'Mutation'), 'fields').sortBy('name');
    })
});
