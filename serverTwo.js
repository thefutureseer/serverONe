//Two servers
const express = require('express');
const app = express().listen(3000, ()=> console.log("Listening on port 3000!"));
const serverTwo = express().listen(8080, ()=> console.log("Listening on port 8080!"));