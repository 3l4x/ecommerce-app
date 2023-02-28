const { expressjwt } = require('express-jwt');
require('dotenv').config();

module.exports = expressjwt({
    secret: process.env.JWT_SECRET || 'secret',
    algorithms: [process.env.JWT_ALGO || 'HS256'],
});
