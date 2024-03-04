import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Service } from "../common/service";
import { User } from "../models/user.model";

class UserService extends Service {

    createOne(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) {
        const name = req.params.name ? req.params.name : req.body.name

        const newUser = new User({ name: name });
        newUser.save()
            .then((savedUser) => res.json(savedUser))
            .catch(next);

    }

    deleteOne(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) {
        throw new Error("Method not implemented.");
    }

    fetchAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) {
        User.find({})
            .then((users) => {
                res.json(users)
            })
            .catch(next)
    }
}

export const userService = new UserService()