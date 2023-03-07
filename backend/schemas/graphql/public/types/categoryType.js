const typeDefs = `
  type Category {
    id: ID!,
    name: String!,
    description: String,
    imgPath: String,
    childCategories : [Category],
    parentCategories : [Category],
    products : [Product],
  },
  type Query{
    getCategory(id: Int!) : Category,
    getCategories : [Category],
    getMainCategories : [Category]
  }
`;

const resolvers = {
  Category : {
    products : async (parent)=>{
      return await parent.getProducts();
    },
    childCategories : async (parent)=>{
      return await parent.getChildCategories();
    },
    parentCategories : async (parent)=>{
      return await parent.getParentCategories();
    },
  },
  Query : {
    //? getter with id
    getCategory : async (parent, {id}, context)=>{
      return await context.Category.findByPk(id);
    },

    //? every category
    getCategories : async (parent, _ , context)=>{
      return await context.Category.findAll();
    },

    //? categories with no parentCategories
    getMainCategories : async (parent, _ , context)=>{
       const categories  = await context.Category.findAll({include : [{model : context.Category , as : 'parentCategories'}]});
       return categories.filter(category=>category.parentCategories.length === 0)
    }
  }
};


module.exports = {
    typeDefs, resolvers
}