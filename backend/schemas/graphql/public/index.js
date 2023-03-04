const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphqlHTTP } = require('express-graphql');
const db = require('../../../models/')

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


module.exports = graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
    context : db
});