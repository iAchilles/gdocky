import Component    from '@ember/component';
import { computed } from '@ember/object';
import { get }      from '@ember/object';
import Types        from 'gdocky/dictionaries/types';

export default Component.extend({

    field: computed(function () {
        const field  = get(this, 'data');
        let object   = {
            isList: false,
            isDeprecated: get(field, 'isDeprecated'),
            deprecationReason: get(field, 'deprecationReason'),
            name: get(field, 'name'),
            description: get(field, 'description')
        }

        if (get(field, 'type.kind') === 'LIST') {

            object.isList      = true;

            if (get(field, 'type.ofType.kind') === 'NON_NULL') {
                let kind           = get(field, 'type.ofType.ofType.kind');
                object.argTypeName = get(field, 'type.ofType.ofType.name');
                object.route       = get(Types, `${kind}.itemRoute`);

            } else {
                let kind           = get(field, 'type.ofType.kind')
                object.argTypeName = get(field, 'type.ofType.name');
                object.route       = get(Types, `${kind}.itemRoute`);
            }

        } else if (get(field, 'type.kind') === 'NON_NULL') {

            if (get(field, 'type.ofType.kind') === 'LIST') {

                object.isList      = true;

                if (get(field, 'type.ofType.ofType.kind') === 'NON_NULL') {

                    let kind           = get(field, 'type.ofType.ofType.ofType.kind');
                    object.argTypeName = get(field, 'type.ofType.ofType.ofType.name');
                    object.route       = get(Types, `${kind}.itemRoute`);

                } else {

                    let kind           = get(field, 'type.ofType.ofType.kind');
                    object.argTypeName = get(field, 'type.ofType.ofType.name');
                    object.route       = get(Types, `${kind}.itemRoute`);

                }

            } else {

                let kind           = get(field, 'type.ofType.kind');
                object.argTypeName = get(field, 'type.ofType.name');
                object.route       = get(Types, `${kind}.itemRoute`);

            }

        } else {

            let kind           = get(field, 'type.kind');
            object.argTypeName = get(field, 'type.name');
            object.route       = get(Types, `${kind}.itemRoute`);

        }

        return object;
    })
});
