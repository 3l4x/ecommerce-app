const typeDefs = `
    type Product {
        id: ID!,
        name: String!,
        description: String,
        imgPath: String,
        price: Float!,
        stock: Int!,
        categories : [Category],
    },
    type Query {
        getProduct(id : Int!) : Product
        getProducts : [Product]
    },
`;

const resolvers = {
    Product: {

        //category of subcategory is always null, fix it please
        categories: async (product) => {
            return await product.getCategories()
        }
    },
    Query: {
        getProduct: async (parent, { id }, context) => {
            return await context.Product.findByPk(id)
        },
        getProducts: async (parent, args, context) => {
            return await context.Product.findAll()
        }
    }
};


module.exports = {
    typeDefs, resolvers
}