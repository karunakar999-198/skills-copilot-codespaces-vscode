//create web server
const express = require('express');
const app = express();

//import comments.js
const comments = require('./comments.js');

//use comments.js
app.use('/comments', comments);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});