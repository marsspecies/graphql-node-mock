/**
 * mock graphql server
 */

 const express = require('express');
 const casual = require('casual-browserify');

 const graphqlHTTP = require('express-graphql');



 const {
     GraphQLObjectType,
     GraphQLSchema,
     GraphQLString,
     GraphQLInt,
     GraphQLList
 } = require('graphql');

 const User = new GraphQLObjectType({
     name: 'User',
     description: 'user对象',
     fields: {
         id: {
             type: GraphQLInt
         },
         name: {
             type: GraphQLString
         }
     }
 });

 const ListItem = new GraphQLObjectType({
    name: 'UserList',
    description: 'user list',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        parentId: {
            type: GraphQLInt
        }
    }
});

const List = new GraphQLList(ListItem);

casual.define('number', () => {
    return parseInt(Math.random() * 10);
})

 const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Query',
    fields: {
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (root, args) {
                return {id: casual.number, name: 'zhangjing', parentId: args.id}
            }
        },
        list: {
            type: List,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function(root, args) {
                return [{id: args.id, name: 'zhangjing', parentId: 1}]
            }
        }
    }
});

const myGraphQLSchema = new GraphQLSchema({
    query: Query
});

const app = express();

const PORT = 3000;

app.use('/graphql', graphqlHTTP(async (req, res, gqlParams) => {
    return {
        schema: myGraphQLSchema,
        graphiql: true
    }
}));

app.listen(PORT);
