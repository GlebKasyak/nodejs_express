import Joi from "@hapi/joi";

const registerSchema: Joi.ObjectSchema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(4)
        .required()
        .trim(),

    secondName: Joi.string()
        .alphanum()
        .trim(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ru"] } })
        .min(5)
        .required()
        .trim(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{5,}$'))
        .required()
        .trim(),
});

export default registerSchema;