const { mockServer, MockList, makeExecutableSchema } = require('graphql-tools');
const casual = require('casual-browserify');

const express = require('express');

const graphqlHTTP = require('express-graphql');

const app = express();

const typeDefs = `
    type Query {
        user(id: ID!): User
        list(id: ID): [List]
    }
    type User {
        id: ID!
        name: String
    }
    type List {
        name: String
        age: Int
        parentId: ID!
    }
`;

casual.define('number', () => {
    return parseInt(Math.random() * 10);
})

const resolvers = {
  Query: {
    user: (root, args, context, info) => {
      return {
        id: args.id,
        name: casual.name
      }
    },
    list: (root, args, context, info) =>{
        return [{
            name: casual.name,
            age: casual.number,
            parentId: args.id
        }]
    }
  },
}
// 如果定义多个schema 可以使用merge-graphql-schemas这个模块来进行合并
const mySchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphql', graphqlHTTP(async (req, res, gqlParams) => {
    return {
        schema: mySchema,
        graphiql: true
    }
}));

app.listen(4000);
