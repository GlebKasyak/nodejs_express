import { Response, NextFunction } from "express";
import { User } from "./../models";
import { verify } from "jsonwebtoken";

export default async (req: any, res: Response, next: NextFunction): Promise<any> => {
    if(req.method === "OPTIONS") return next();

    try {
        const token: string = req.cookies.x_auth;

        if(!token) {
            return res.status(401).json({ message: "No authorization" })
        }

        try {
            const decoded: any = verify(token, "token_key");
            const user = await User.findOne({_id: decoded.userId });
            if(!user) throw new Error("there is no such user");

            req.user = user;
            next();
        } catch (err) {
            return res.status(401).json({ message: "No authorization", err });
        }

    } catch (err) {
        res.status(401).json({ message: "No authorization", err });
    }
};