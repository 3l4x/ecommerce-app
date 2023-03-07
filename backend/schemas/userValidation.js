const Joi = require('joi');

const temporaryPattern = /^\p{L}[\p{L}\s\p{Pd}\\'-]*$/u;

const registerSchema = Joi.object({
    email: Joi.string()
        .min(3)
        .max(300)
        .required()
        .email(),
    lastName: Joi.string()
        //could technically remove min(1) but im gonna leave it here
        .min(1)
        .max(50)
        .required()
        .pattern(new RegExp(temporaryPattern)),
    firstName: Joi.string()
        .min(1)
        .max(50)
        .required()
        .pattern(new RegExp(temporaryPattern)),
    password: Joi.string()
        .min(1)
        .required(),
    country: Joi.string()
        .min(1)
        .max(100)
        .pattern(new RegExp(temporaryPattern)),
    state: Joi.string()
        .min(1)
        .max(100)
        .pattern(new RegExp(temporaryPattern)),
    zip: Joi.string()
        .min(1)
        .max(20)
        //for now it will accept things like 1-2-3-4 as well
        //a better approach would be to select regex based on user's country
        .pattern( new RegExp(/^\d+(\d|-)*\d$/)),
    city: Joi.string()
        .min(1)
        .max(100)
        .pattern(new RegExp(temporaryPattern)),
    address1: Joi.string()
        .min(1)
        .max(100)
        .pattern(new RegExp(/^(\p{L}|\d)[\d\p{L}\s\p{Pd}\\'\-\\/#,.]*$/u)),
    address2: Joi.string()
        .min(1)
        .max(100)
        .pattern(new RegExp(/^(\p{L}|\d)[\d\p{L}\s\p{Pd}\\'\-\\/#,.]*$/u)),
    phoneNumber: Joi.string()
        .min(1)
        .max(20)
        .pattern(new RegExp(/^\\+\d[\d\s\\-\\)\\(]+$/)),
})


const loginSchema = Joi.object({
    email: Joi.string()
        .min(3)
        .max(300)
        .required()
        .email(),
    password: Joi.string()
        .min(1)
        .required(),
})


module.exports = {
    registerSchema,
    loginSchema
}