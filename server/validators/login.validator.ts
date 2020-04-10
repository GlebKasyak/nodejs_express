import Joi from "@hapi/joi";

const loginSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ru"] } })
        .min(5)
        .required()
        .trim(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{5,}$'))
        .required()
        .trim()
});


export default loginSchema;