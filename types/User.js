module.exports = function({GraphQLObjectType, GraphQLInt, GraphQLString}) {
    return new GraphQLObjectType({
        name: 'User',
        description: 'user对象',
        fields: {
            id: {
                type: GraphQLInt
            },
            name: {
                type: GraphQLString
            },
            age: {
                type: GraphQLInt
            }
        }
    });
}