const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphqlHTTP } = require('express-graphql');

const executableSchema = makeExecutableSchema({
    //typeDefs,
    //resolvers,
});


module.exports = graphqlHTTP({
schema: executableSchema,
graphiql: true,
});