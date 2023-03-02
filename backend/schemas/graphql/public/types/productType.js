const typeDefs = `
  type Query {
  },
`;

const resolvers = {
    Query: {
        _: (obj, args, ctx, info) => (()=>{})(),
    }
};


module.exports = {
    typeDefs, resolvers
}