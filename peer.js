/**
 * Created by Administrator on 2018-01-20.
 */
const WebSocket = require("ws");
const port = [7001, 7002, 7003, 7004, 7005];

let serverList = [];

function initServer() {
    port.map(item => {
        const server = new WebSocket.Server({port: item});
        server.on('connection', (ws, req) => initConnect(ws, req));
        console.log('listening websocket p2p port on: ' + item);
    })
}

function initConnect(ws, req) {

    serverList.push({server: ws});
    ws.on('message', (message) => {

        onMessage('收到消息:', message);
    });
    ws.on('open', (message) => {
        onOpen(item, message);
    });
    ws.on('close', (message) => {
        onClose(item, message);
    })
}


function onConnection(ws) {
    console.log(ws);
}
function onOpen(item, evt) {
    console.log(item, 'onopen', evt);
}
function onMessage(item, evt) {
    console.log(item, 'message', evt);
};
function onClose(item, evt) {
    console.log(item, 'close', evt);
};





initServer();



