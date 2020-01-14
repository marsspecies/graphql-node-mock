module.exports = function({GraphQLObjectType, GraphQLInt, GraphQLString}) {
    return new GraphQLObjectType({
        name: 'Task',
        description: 'Task对象',
        fields: {
            id: {
                type: GraphQLInt
            },
            content: {
                type: GraphQLString
            },
            description: {
                type: GraphQLString
            }
        }
    });
}