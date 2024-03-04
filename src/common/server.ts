import express, { Express } from "express";
import http from "http";
import { Router } from "./router";
import mongoose from "mongoose";
import { environment } from "./environment";

export class Server {
    app: Express = express();
    db!: mongoose.Mongoose;

    async initDB() {
        (<any>mongoose).Promise = global.Promise

        try { 
            if (!environment.db.url) {
                throw new Error("MONGODB_URI is not defined in the environment.");
            }

            await mongoose.connect(environment.db.url, {
                authSource: environment.db.authSource,
                user: environment.db.user,
                pass: environment.db.pass,
            })
            
            this.db = mongoose
        } catch (error) { 
            console.error("Database connection error: ", error);
            throw error;
        }
    }

    initServer(routers: Router[]): Promise<http.Server> {
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

    async bootstrap(routers: Router[] = []): Promise<http.Server> {
        await this.initDB();
        const server = await this.initServer(routers);
        return server;
    }
}