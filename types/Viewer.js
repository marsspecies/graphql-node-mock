const getType = require('../helpers/getType')
const getResolvers = require('../helpers/getResolvers')

module.exports = function({GraphQLObjectType, GraphQLInt, GraphQLString}) {

    return new GraphQLObjectType({
        name: 'Viewer',
        description: 'viewer dashboard',
        fields: {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            team: {
                type: getType('Team'),
                resolve: getResolvers('Team')
            }
        }
    });
}