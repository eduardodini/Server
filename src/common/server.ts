import express, { Express } from "express";
import http from "http";
import { Router } from "./router";

export class Server {
    app: Express = express();

    initServer(routers: [Router]): Promise<http.Server> {
        return new Promise((resolve, reject) => {
            try {
                const httpServer = http.createServer(this.app);

                for (const router of routers) {
                    router.applyRoutes(this.app);
                }

                httpServer.listen(4200, () => {
                    resolve(httpServer);
                });

            } catch (error) {
                reject(error);
            }
        });
    }

    async bootstrap(routers: [Router]): Promise<http.Server> {
        const server = await this.initServer(routers);
        return server;
    }

}