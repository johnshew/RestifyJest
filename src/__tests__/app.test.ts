import { Server } from '../app';

test('basic',  (done) => {
    let server = new Server(()=>{
        console.log('Listening');
        server.close(()=>{
            console.log('Closed');
            done();
        });
    });

});