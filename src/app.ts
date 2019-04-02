
import * as restify from 'restify';
import { readSync } from 'fs';

export class Server {
    server: restify.Server;
    ready: Promise<void>;
    closed : Promise<void>;

    constructor(callback?: () => any) {
        this.server = restify.createServer();
        
        this.server.get('/',(req,res,done) => {
            res.write('Got it');
            res.end();
            return done();
        });

        this.ready = new Promise<void>((resolve, reject) => {
            this.server.listen(8080, () =>{
                callback && callback();
                return resolve()
            });
        });
    }

    close(callback?: () => any) : Promise<void> {
        return new Promise((resolve,reject)=>{
            this.server.close(()=>{
                callback && callback();
                return resolve();
            });
        });
    }
}
