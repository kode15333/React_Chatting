const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket => {
    socket.on("incoming data", (data)=>{
       socket.broadcast.emit("outgoing data", {nickname: socket.nickname, message : data.text});
    });
    socket.on('user join', data => {
        socket.nickname = data.nickname;
        socket.broadcast.emit('user joined', {nickname : data.nickname})
    })

    socket.on("disconnect", () => {
        socket.broadcast.emit('user out', {nickname : socket.nickname})});
});


server.listen(port, () => console.log(`Listening on port ${port}`));