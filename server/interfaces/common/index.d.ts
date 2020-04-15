import { IUserDocument } from "../user.interface";

declare global {
    namespace Express {
        interface Request {
            user: IUserDocument,
            token: string,
        }
    }
}