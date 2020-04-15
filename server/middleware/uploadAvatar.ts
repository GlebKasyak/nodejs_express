import multer from "multer";
import { Request } from "express";
import path from "path";

import {
    File,
    FileDestinationCallback,
    FileFilterHandler,
    FileNameCallback
} from "../interfaces/common/MulterInterface";


const storage = multer.diskStorage({
    destination: (req: Request, file: File, cb: FileDestinationCallback): void => {
        cb(null, path.resolve(__dirname, "../uploads" ));
    },
    filename: (req: Request, file: File, cb: FileNameCallback): void => {
        cb(null, `${ Date.now() }_${ file.originalname }`);
    }
});


const fileFilter: FileFilterHandler = (req, file, cb) : void => {
    if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        cb(null, true);
    } else {
        cb(new Error("Error! Invalid file type!"));
    }
};

export default multer({ storage, fileFilter, }).single("avatar");