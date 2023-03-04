const typeDefs = `
    type Product {
        id: ID!,
        title: String!,
        description: String,
        imgPath: String,
        price: Float!,
        stock: Int!,
        subcategory : Subcategory,
    },
    type Query {
        product(id : Int!) : Product
        products : [Product]
    },
`;

const resolvers = {
    Product: {

        //category of subcategory is always null, fix it please
        subcategory: async (product) => {
            return await product.getSubcategory()
        }
    },
    Query: {
        product: async (parent, { id }, context) => {
            return await context.Product.findByPk(id)
        },
        products: async (parent, args, context) => {
            return await context.Product.findAll()
        }
    }
};


module.exports = {
    typeDefs, resolvers
}