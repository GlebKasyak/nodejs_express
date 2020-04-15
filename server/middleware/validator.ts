import { RequestHandler } from "express";
import { ObjectSchema } from "@hapi/joi";

const validator = (schema: ObjectSchema<any>): RequestHandler => async (req, res, next): Promise<void> => {
    try {
        await schema.validateAsync(req.body);
        next();
    }
    catch (err) {
        res.status(400).send(err);
    }
};

export default validator;