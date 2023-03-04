const typeDefs = `
  type Category {
    id: ID!,
    title: String!,
    description: String,
    imgPath: String,
    products : [Product],
    subcategories : [Subcategory]
  },
  type Query{
    category(id: Int!) : Category
  }
`;

const resolvers = {
  Category : {
    products : async (parent)=>{
      return await parent.getProducts();
    },
    subcategories : async (parent)=>{
      return await parent.getSubcategories();
    },
  },
  Query : {
    category : async (parent, {id}, context)=>{
      return await context.Category.findByPk(id);
    }
  }
};


module.exports = {
    typeDefs, resolvers
}