import { Express } from 'express';

export abstract class Router {
    abstract applyRoutes(application: Express): any
}