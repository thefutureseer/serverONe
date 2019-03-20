//Simple backend server requiring express midware
const express = require('express');
//app variable with a copy of the express function
const app = express();
//add the listen method
app.listen(3000, () => {
  console.log('Could this be the most simple express node server? Listening on port 3000!');
});