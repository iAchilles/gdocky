import Component          from '@ember/component';
import { get, set }       from '@ember/object';
import { filterBy }       from '@ember/object/computed';
import { defineProperty } from '@ember/object';
import { computed }       from '@ember/object';
import Types              from 'gdocky/dictionaries/types';

export default Component.extend({

    /**
     * GraphQl schema object. Parameter of the component.
     * @var {Object} data
     */

    /**
     * Type (ie. ENUM, OBJECT etc). Parameter of the component.
     * @var {string} type
     */

    /**
     * If the header of the block is visible. Parameter of the component.
     * @var {boolean} isHeaderVisible
     */


    /**
     * @type {string}
     */
    title: computed('type', function () {
        let type = get(this, 'type');

        return get(Types, `${type}.name`);
    }),

    /**
     * @type {string}
     */
    description: computed('fields', function () {
        let fields = get(this, 'fields');
        let type   = get(this, 'type');

        if (fields) {

            if (type === 'MUTATION' || type === 'QUERY') {

                return get(get(this, 'fields')[ 0 ], 'description');

            }
        }

        return null;
    }),

    /**
     * @type {string}
     */
    indexRoute: computed('type', function () {
        let type = get(this, 'type');

        return get(Types, `${type}.indexRoute`);
    }),

    /**
     * @type {string}
     */
    itemRoute: computed('type', function () {
        let type = get(this, 'type');

        return get(Types, `${type}.itemRoute`);
    }),

    /**
     * @type {Object[]}
     */
    list: computed('fields', function () {
        let fields = get(this, 'fields');
        let type   = get(this, 'type');

        if (fields) {

            if (type === 'MUTATION' || type === 'QUERY') {

                return get(get(this, 'fields')[ 0 ], 'fields').sortBy('name');

            } else if (type === 'OBJECT') {

                let mutation = fields.findBy('name', 'Mutation');
                let query    = fields.findBy('name', 'Query');
                fields.removeObjects([ mutation, query ]);

                return fields.sortBy('name');

            } else {

                return fields.sortBy('name');
            }
        }

        return [];
    }),

    init() {
        this._super(...arguments);
        this.setFields(get(this, 'type'));
    },

    /**
     *
     * @param {string} type
     */
    setFields(type) {
        if (type === 'MUTATION' || type === 'QUERY') {

            let name = type === 'MUTATION' ? 'Mutation' : 'Query';
            defineProperty(this, 'fields', filterBy('data.__schema.types', 'name', name));

        } else if (type === 'DIRECTIVE') {

            set(this, 'fields', get(this, 'data.__schema.directives'));

        } else {

            defineProperty(this, 'fields', filterBy('data.__schema.types', 'kind', get(this, 'type')));

        }
    }
});
