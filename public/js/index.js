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

  //added on lecture113 while fixing UI
  var li = jQuery("<li></li>");  //this time we create an element with jQuery instead of referring to an existing one
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);
});


// socket.emit('createMessage',{
//   from:'Frank',
//   text:'Hi from Frank'
// }, function (data) {  //this is the callback function that will connect anythig the server sends back as feedback
//   console.log('Got server acknowledgement ServerMessage: ',data);  //data is what you pass from the server insid the
//   //callback which could be an object
// });





socket.on('disconnect',function () {
  console.log('Disconnected from server');
});

// //writing a custom event listener
// socket.on('newEmail',function (email) {
//   console.log('New email',email);
// })


//how to add event listener in jQuery
jQuery('#message-form').on('submit',function (e) {
  //we need to access the e argument to override the default jQuery behaviour of refreshing a page when then send button is clicked
  e.preventDefault();
  //Now that we are overriding the default page refresh we can trigger our socket emitter
  socket.emit('createMessage',{
    from: 'User',
    text: jQuery('[name=message]').val()
  },function () {

  })



});
