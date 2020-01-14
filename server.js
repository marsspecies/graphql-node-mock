const express = require('express');
const cors = require('cors');

const graphqlHTTP = require('express-graphql');

const {GraphQLSchema} = require('graphql');

const query = require('./query');
const mutation = require('./mutation');

const schema = new GraphQLSchema({
    query,
    mutation
});


const app = express();
app.use(cors());

const PORT = 9000;

app.get('/graphql', graphqlHTTP(async (req, res, gqlParams) => {
    return {
        schema: schema,
        graphiql: true
    }
}));
app.post('/graphql', graphqlHTTP(async (req, res, gqlParams) => {
    return {
        schema: schema,
        graphiql: true
    }
}));
app.options('/graphql', (req, res) => {
    res.send({data: {status: 'success'}})
});

app.listen(PORT);



