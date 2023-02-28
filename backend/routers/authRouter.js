const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const { validateReqBody, verifyJwtToken, checkJwtBlacklist } = require('../middlewares');
const { loginSchema, registerSchema } = require('../schemas/userSchema');

router
    .post('/register', validateReqBody(registerSchema), authController.register)

    .post('/login', validateReqBody(loginSchema), authController.login)

    .post('/logout', verifyJwtToken, checkJwtBlacklist, authController.logout)

    .post('/who', verifyJwtToken, checkJwtBlacklist, authController.who)

module.exports = router;