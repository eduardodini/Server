import { Router } from "./common/router";
import { Server } from "./common/server";
import { helpRouters } from "./routers/help.router";

const server = new Server();

const routers: [Router] = [
    helpRouters
]

server.bootstrap(routers)
    .then((httpServer) => {
        console.log("Server is listening on 4200");
    })
    .catch((error) => {
        console.error("Server failed to start");
        console.error(error);
    });