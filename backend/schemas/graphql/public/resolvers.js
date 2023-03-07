const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge')
const {resolverLoader} = require('../../../utils/customLoader');
const path = require('path');

const resolversArray = loadFilesSync(path.join(__dirname,'./types'),{extensions: ['js'], extractExports: resolverLoader})
const resolvers = mergeResolvers(resolversArray);

module.exports = resolvers;