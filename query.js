const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const getType = require('./helpers/getType');
const getResolvers = require('./helpers/getResolvers');

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Query',
    fields: {
        user: {
            type: getType('User'),
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: getResolvers('User')
        },
        tasks: {
            type: new GraphQLList(getType('Task')),
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: getResolvers('Task')
        },
        viewer: {
            type: getType('Viewer'),
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: getResolvers('Viewer')
        }
    }
});

module.exports = query