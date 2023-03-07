module.exports = {
    typeDefLoader: (content) => {
        return content.typeDefs;
    },

    resolverLoader: (content) => {
        return content.resolvers;
    },


}
