const path = require('path'); //path is a node module so no need to npm install it
//path module makes referencing a path simpler
//console.log(__dirname + '/../public/')  Old way
const publicPath = path.join(__dirname,'../public'); //New way
console.log(publicPath);
//$npm i express@4.14.0 --save   to install express

const express = require('express');

//HEROKU
const port = process.env.PORT || 3000;  //for HEROKU
//in package.json scripts add start  node server/server.js
//also add engines to tell heroku which version of Node to use

var app = express();

// app.use(express.static(publicPath)); //now if we $node server/server.js then on the browser localhost:3000 we see the index.html
//create .gitignore and place node_modules/

//creare a new repository in github.com
//$git status
//$git add .
//$gir commit -m 'Init commit'
//now copy to terminal the 2 lines given in github.com
/*
git remote add origin https://github.com/angdiam/node-course-2-chat-app.git
git push -u origin master
Now at github.com you shpuld be able to see the files you created*/
//$heroku create     to create the application
//$git push heroku master    to deploy the app to heroku
//In safari type https://lit-escarpment-19280.herokuapp.com/   that was shown in terminal when heroku finished
//this is our app

//$npm i socket.io@1.4.8 --save   socket.io is s library both for the fornt end and the server that permits
//to install essily websockets

//WORKING WITH SOCKET.IO
const http = require('http');  //node module
const socketIO = require('socket.io');

var server = http.createServer(app);
//so far not much has changed. the http was already included behond the scenes in the express.
//we only did thi so that in theline below tell the server to start using socket.io

//configure server to use socket.io
var io = socketIO(server);
//now the server is ready to accept new connections
//if you type url on the client localhost:3000/socket.io/socket.io.js
//then you see the js library that is now available on the client and we can now write script from the client side to connect to the server
//TIME TO WRITE SOME CODE IN THE index.html to create a socket to the server

app.use(express.static(publicPath)); //now if we $node server/server.js then on the browser localhost:3000 we see the index.html

//allows to register an event listener - the server to listen to a specific event
//connection is a built in event in socket.io and detects if there is a new connection to the server
//if there is then the callback function kicks in
//the socket is the individual socket of the client that connectet to the server
//this is the var socket = io(); that we placed in the client index.html
io.on('connection', (socket) => {
  console.log('New user connected');

  //AFTER CUSTOM EVENT LISTENER IN index.js
  //We match the same name newEmail that we used in listener in index.js, then we either pass no data
  //or we pass a number,bool or more commonly an object
  // socket.emit('newEmail',{
  //   from: 'elena@example.com',
  //   text: 'Hey Angelos. Whats Up',
  //   createAt: 123
  // });
  //now if you go to the index.js listener in the function callback the first argument will be the data, the object above
  //catch it by naming it email

  //Time now for creatig an event listener in the server to listen from the client. You should not use io.on
  // socket.on('createEmail', (nEmail) => {
  //   console.log('createEmailinServer: ',nEmail);
  // });
  //nEmail is the  data we catch from the event emitted from the client and createEmail is the event name

  socket.emit('newMessage',{
    from: 'Angelos',
    text: 'Hello there',
    createdAt: 123123
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage: ',message);
  });

  //identical to the index.html event, below we detect when the specific browser disconnected
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
  //git commit now   git status     git commit -am 'Add connect and disonnect event handlers'  git push
  //no need to push to heroku just yet

});
/*Socket.io is persistent technology meanign that both server and client will try to keep the connection up
if the client is closed then there is no connection fo rthe server to keep
if the server goes down then the client will disconnec temporarily but then it will try to reconnect
*/
//now head to the index.html to do something when the client connects to the server
//WE CAN ALSO WRITE CUSTOM EVENT for SOCKET.IO    connection, connect disconnect are default socket.io events









// app.listen(port, () => {
//   console.log(`Server of node-chat-app is up on port ${port}`);
// });
//after socket.io
server.listen(port, () => {
  console.log(`Server of node-chat-app is up on port ${port}`);
});
