const { isOnBlacklist } = require('../utils/jwt/blacklist');
const { StatusCodes } = require('http-status-codes');
const getTokenFromReq = require('../utils/jwt/getTokenFromReq');

const checkJwtBlacklist = (req, res, next) => {
    const token = getTokenFromReq(req)
    if (token && isOnBlacklist(token))
        return res.sendStatus(StatusCodes.UNAUTHORIZED).send({ message: 'unauthorized' });
    next();
}

module.exports = checkJwtBlacklist;
