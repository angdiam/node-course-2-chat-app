var socket = io();
//WE have removed => and placed function before () to convert an arrow function to a normal ES function
socket.on('connect', function ()  {
  console.log('Connected to server');

  // socket.emit('createEmail',{
  //   to: 'jen@example.com',
  //   text: 'Hey. This is Angelos'
  // });
  //Chrome Deeloper Tools in Console allow you to type even the exact same line above to create an event
  //emitter on the spot which will then be caught by the server. This helps with debugging

  // socket.emit('createMessage',{
  //   from: 'Jennifer',
  //   text: 'Hello everyone. This is Jennifer'
  // })



});
//if you now go to console on chrome then you will see the above message onc e the browser connects to the server


socket.on('newMessage', function (message) {
  console.log('newMessage: ',message);
});

socket.on('disconnect',function () {
  console.log('Disconnected from server');
});

// //writing a custom event listener
// socket.on('newEmail',function (email) {
//   console.log('New email',email);
// })
