import { NextFunction, Request, Response } from "express";

export abstract class Service {
  abstract createOne(req: Request, res: Response, next: NextFunction): any;
  abstract deleteOne(req: Request, res: Response, next: NextFunction): any;
  abstract fetchAll(req: Request, res: Response, next: NextFunction): any;
}
