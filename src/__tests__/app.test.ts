import { Server } from '../app';

test('basic', async (done) => {
    let server = new Server(() => {
        console.log('Listening');
        server.close(() => {
            console.log('Closed');
            done();
        });
    });

});


test('test repeat', async (done) => {
    let server = new Server(() => {
        console.log('Listening');
        server.close(() => {
            console.log('Closed');
            done();
        });
    });

});

test('test repeat with await', async (done) => {
    let server = new Server();
    await server.ready;
    console.log('Listening');
    await server.close();
    console.log('Closed');
    done();
});