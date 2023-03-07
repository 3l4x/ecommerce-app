require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const authController = {};
const { addToBlacklist } = require('../utils/jwt/blacklist');
const getTokenFromReq = require('../utils/jwt/getTokenFromReq');


authController.register = async (req, res) => {
    //TODO validating at controller level not just model level
    const user = await User.create({ ...req.body });
/* ->this will be done inside a middleware
    catch (err) {

        res.status(StatusCodes.BAD_REQUEST).send(err.message);
        res.status(StatusCodes.CONFLICT).send(err.message);
    } */
    res.status(StatusCodes.CREATED).send(user)

}


//
authController.login = async (req, res) => {
    const { email, password } = req.body;
    //TODO extra validation on controller level
    if (!email || !password)
        return res.status(StatusCodes.BAD_REQUEST).send('Invalid email or password');
    const user = await User.findOne({ where: { email: email } })
    if (!user)
        return res.status(StatusCodes.NOT_FOUND).send('notfound');
    if (!user.matchPassword(password))
        return res.status(StatusCodes.UNAUTHORIZED).send('unauthorized');

    //successful login
    //TODO implement mechanism to store blacklisted+signed tokens in db
    const token = jwt.sign(
        {
            sub: user.email,
            iat: Date.now()
        },
        process.env.JWT_SECRET || 'secret',
        {
            algorithm: process.env.JWT_ALGO || 'HS256',
        }
    );
    res.status(StatusCodes.OK).send({ token });

}

authController.who = async (req, res) => {
    res.send(req.auth)
}

authController.logout = async (req, res) => {
    const token = getTokenFromReq(req);
    if(!token)
        return res.status(StatusCodes.UNAUTHORIZED).send('no token')
    addToBlacklist(token);
    res.status(StatusCodes.OK).send('logout')

}

//TODO need 2 implement these:
authController.forgotPassword  = () =>{};
authController.verifyEmail  = () =>{};

module.exports = authController;