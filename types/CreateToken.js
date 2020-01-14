module.exports = function({GraphQLObjectType, GraphQLInt, GraphQLString}) {
    return new GraphQLObjectType({
        name: 'CreateToken',
        description: 'CreateToken',
        fields: {
            token: {
                type: GraphQLString
            }
        }
    });
}