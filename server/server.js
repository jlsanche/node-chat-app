const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {
  generateMessage
} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('User connected!');

  //socket.emit from admin text welcome to chat app
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to Super Secure Chat App'));

  //socket.broadcast.emit from admin text new user joined
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

  socket.on('createMessage', (message, callback) => {
    console.log('message created', message);
    // io.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });


  socket.on('disconnect', () => {
    console.log('User was disconnected.')
  });
})

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});