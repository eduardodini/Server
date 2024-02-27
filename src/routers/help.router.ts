import { Express, NextFunction, Request, Response } from "express";
import { Router } from "../common/router";

class HelpRouters extends Router {
    applyRoutes(application: Express) {

        application.get('/help', (req: Request, res: Response, next: NextFunction) => {
            res.json({ message: 'Success' });
        });
        
    }
}

export const helpRouters = new HelpRouters();