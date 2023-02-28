const getTokenFromReq = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        return token
    }
    return null;
}

module.exports = getTokenFromReq;