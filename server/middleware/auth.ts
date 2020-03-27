import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export default (req: any, res: Response, next: NextFunction): any => {
    if(req.method === "OPTIONS") return next();

    try {
        const token: string = req.cookies.x_auth;
        if(!token) {
            return res.status(401).json({ message: "No authorization" })
        }

        try {
            req.user = verify(token, "token_key");
            next();
        } catch (err) {
            return res.status(401).json({ message: "No authorization", err });
        }

    } catch (err) {
        res.status(401).json({ message: "No authorization", err });
    }
};