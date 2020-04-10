import Joi from "@hapi/joi";

const messageSchema: Joi.ObjectSchema = Joi.object({
    writer: Joi.string()
        .alphanum(),

    text: Joi.string()
        .trim(),
});

export default messageSchema;