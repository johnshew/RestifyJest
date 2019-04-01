
import * as restify from 'restify';

export class Server {
    server: restify.Server;
    // ready : Promise<void>;

    constructor(callback?: () => any) {
        this.server = restify.createServer();
        // this.ready = new Promise<void>((resolve, reject) => {));
        this.server.listen(8080,callback);
    }
    
    close(callback: () => any) {
        this.server.close(callback);
    }
} 