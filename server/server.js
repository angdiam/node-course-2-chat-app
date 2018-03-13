const path = require('path'); //path is a node module so no need to npm install it
//path module makes referencing a path simpler
//console.log(__dirname + '/../public/')  Old way
const publicPath = path.join(__dirname,'../public'); //New way
console.log(publicPath);
//$npm i express@4.14.0 --save   to install express

const express = require('express');

//HEROKU
const port = process.env.PORT || 3000;  //for HEROKU
//in package.json scripts add start  mode server/server.js
//also add engines to tell heroku which version of Node to use

var app = express();

app.use(express.static(publicPath)); //now if we $node server/server.js then on the browser localhost:3000 we see the index.html
//create .gitignore and place node_modules/







app.listen(port, () => {
  console.log(`Server of node-chat-app is up on port ${port}`);
});
