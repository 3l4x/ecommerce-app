const { mergeTypeDefs } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files');
const {typeDefLoader} = require('../../../utils/customLoader');
const path = require('path');

const typeDefsArray = loadFilesSync(path.join(__dirname,'./types'),{extensions: ['js'], extractExports: typeDefLoader})
const typeDefs = mergeTypeDefs(typeDefsArray);

module.exports =  typeDefs;