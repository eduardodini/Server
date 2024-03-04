import { Express, Request, NextFunction, Response } from "express";
import { Router } from "../common/router";
import { userService } from "../services/user.service";


class UserRouter extends Router {

    applyRoutes(application: Express) {
        application.post('/users', (req: Request, res: Response, next: NextFunction) => {
            userService.createOne(req, res, next);
        });
    }

}

export const userRouter = new UserRouter();