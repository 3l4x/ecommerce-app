const express = require('express');
const app = express();/* 
const graphqlServer = require('./graphql/graphqlServer'); */

//middlewares
app.use(express.json());
//

//routers
const authRouter = require('./routers/authRouter');
app.use('/api/auth', authRouter);

//graphql
const graphqlServer = require('./schemas/graphql/public/index');
app.use('/api/graphql', graphqlServer)

//TODO fix error handler middleware
app.use((err, req, res, next) => {
    if (!err)
        next();
    if (err.name === 'ValidationError')
    //do stuff
    { }
    else if (err.name === 'something else')
    //do stuff
    { }
    else
        return res.status(500).json({
            error: 'internal server error'
        })
});

module.exports = app;