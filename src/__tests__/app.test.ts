import { Server } from '../app';

test('basic',  async (done) => {
    let server = new Server(()=>{
        console.log('Listening');
        server.close(()=>{
            console.log('Closed');
            done();
        });
    });

});


test('test repeat',  async (done) => {
    let server = new Server(()=>{
        console.log('Listening');
        server.close(()=>{
            console.log('Closed');
            done();
        });
    });

});

test('test with async callback',  async (done) => {
    let server = new Server( async()=>{
        console.log('Listening');
        server.close(()=>{
            console.log('Closed');
            done();
        });
    });
});


test('test with await', async (done) => {
    let server = await new Server().ready;
    console.log('Listening');
    await server.close();
    console.log('Closed');
    done();
});