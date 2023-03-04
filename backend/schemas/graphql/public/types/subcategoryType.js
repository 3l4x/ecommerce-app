const typeDefs = `
  type Subcategory {
    id: ID!,
    title: String!,
    description: String,
    imgPath: String,
    category : Category,
    products : [Product]
  },
  type Query{
    subcategory(id: Int!) : Subcategory
  }
`;

const resolvers = {
  Subcategory: {
    category : async(parent) =>{
      return await parent.getCategory();
    },
    products : async(parent) =>{
      return await parent.getProducts();
    }
  },
  Query : {
    subcategory : async(parent,{id},context) =>{
      console.log('lefut');
      return await context.Subcategory.findByPk(id);
    }
  }
};


module.exports = {
  typeDefs, resolvers
}