const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} = require('graphql');


module.exports = function (filename) {
    return require(`../types/${filename}`)({GraphQLObjectType,
        GraphQLSchema,
        GraphQLString,
        GraphQLInt,
        GraphQLBoolean,
        GraphQLList})
}