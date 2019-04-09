
import * as restify from 'restify';
import { readSync } from 'fs';

export class Server {
    server: restify.Server;
    ready: Promise<Server>;

    constructor(callback?: () => any) {
        this.server = restify.createServer();
        
        this.server.get('/',(req,res,done) => {
            res.write('Got it');
            res.end();
            return done();
        });

        this.ready = new Promise<Server>((resolve, reject) => {
            this.server.listen(8080, () =>{
                callback && callback();
                return resolve(this);
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
