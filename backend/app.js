const express = require('express');
const app = express();
const graphqlServer = require('./graphql/graphqlServer');

//middlewares
app.use(express.json());
//

//routers
const authRouter = require('./routers/authRouter');
app.use('/api/auth', authRouter);

//graphql
app.use('/api/graphql', graphqlServer)



//



module.exports = app;