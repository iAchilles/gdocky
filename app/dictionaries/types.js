
const Types = {
    QUERY: {
        name: 'Queries',
        indexRoute: 'queries.index',
        itemRoute: null
    },
    MUTATION: {
        name: 'Mutations',
        indexRoute: 'mutations.index',
        itemRoute: null
    },
    SCALAR: {
        name: 'Scalars',
        indexRoute: 'scalars.index',
        itemRoute: 'scalars.scalar'
    },
    ENUM: {
        name: 'Enums',
        indexRoute: 'enums.index',
        itemRoute: 'enums.enum'
    },
    INPUT_OBJECT: {
        name: 'Input Objects',
        indexRoute: 'inputs.index',
        itemRoute: 'input.input'
    },
    OBJECT: {
        name: 'Objects',
        indexRoute: 'objects.index',
        itemRoute: 'objects.object'
    },
    INTERFACE: {
        name: 'Interfaces',
        indexRoute: 'interfaces.index',
        itemRoute: 'interfaces.interface'
    },
    UNION: {
        name: 'Unions',
        indexRoute: 'unions.index',
        itemRoute: 'unions.union'
    },
    DIRECTIVE: {
        name: 'Directives',
        indexRoute: 'directives.index',
        itemRoute: null
    }
}

export default Types;