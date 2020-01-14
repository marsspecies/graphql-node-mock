const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLInputObjectType
} = require('graphql');

const getType = require('./helpers/getType');
const getResolvers = require('./helpers/getResolvers');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation',
    fields: {
        createToken: {
            type: getType('CreateToken'),
            args: {
                input: {
                    type: new GraphQLInputObjectType({
                        name: 'UserEmail',
                        fields: {
                            email: {
                                type: GraphQLString
                            },
                            password: {
                                type: GraphQLString
                            }
                        }
                    })
                }
            },
            resolve: getResolvers('Token')
        }
    }
});

module.exports = mutation