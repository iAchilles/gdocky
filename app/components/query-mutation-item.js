import Component    from '@ember/component';
import { computed } from '@ember/object';
import { get }      from '@ember/object';
import { observer } from '@ember/object';
import Types        from 'gdocky/dictionaries/types';

export default Component.extend({

    anchorObserver: observer('anchor', function () {
        if (get(this, 'id') === get(this, 'anchor')) {
            this.scrollIntoView();
        }
    }),
    
    returns: computed(function () {
        const type  = get(this, 'data.type');
        let   value = { isList: false, name: null };

        if (get(type, 'kind') === 'LIST') {
            let ofType   = get(type, 'ofType');
            value.isList = true;
            value.name   = ofType.name;
            value.route  = get(get(Types, get(ofType, 'kind')), 'itemRoute');
        } else {
            value.name  = get(type, 'name');
            value.route = get(get(Types, get(type, 'kind')), 'itemRoute');
        }

        return value;
    }),

    arguments: computed(function () {
        let value = [];
        let args  = get(this, 'data.args').sortBy('name');

        args.forEach(function (arg) {
            let object = {
                isRequired: false,
                defaultValue: get(arg, 'defaultValue'),
                isList: false,
                name: get(arg, 'name'),
                description: get(arg, 'description')
            };

            if (get(arg, 'type.kind') === 'LIST') {
                let kind           = get(arg, 'type.ofType.kind');
                object.isList      = true;
                object.argTypeName = get(arg, 'type.ofType.name');
                object.route       = get(Types, `${kind}.itemRoute`);
                value.push(object);

            } else if (get(arg, 'type.kind') === 'NON_NULL') {

                object.isRequired = true;

                if (get(arg, 'type.ofType.kind') === 'LIST') {
                    let kind           = get(arg, 'type.ofType.ofType.kind');
                    object.isList      = true;
                    object.argTypeName = get(arg, 'type.ofType.ofType.name');
                    object.route       = get(Types, `${kind}.itemRoute`);
                    value.push(object);
                } else {
                    let kind           = get(arg, 'type.ofType.kind');
                    object.argTypeName = get(arg, 'type.ofType.name');
                    object.route       = get(Types, `${kind}.itemRoute`);
                    value.push(object);
                }

            } else {
                let kind           = get(arg, 'type.kind');
                object.argTypeName = get(arg, 'type.name');
                object.route       = get(Types, `${kind}.itemRoute`);
                value.push(object);
            }
        });

        return value;
    }),

    didInsertElement() {
        this._super(...arguments);
        if (get(this, 'id') === get(this, 'anchor')) {
            this.scrollIntoView();
        }
    },

    scrollIntoView() {
        get(this, 'element').scrollIntoView({ behavior: "smooth" });
    },
});
