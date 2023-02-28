const { StatusCodes } = require("http-status-codes");

const validateReqBody = (schema) =>{
    return (req,res,next) =>{
        const {error} = schema.validate(req.body);
        if(error)
            return res.status(StatusCodes.BAD_REQUEST).send(error)
        next();
    }
}

module.exports = validateReqBody;