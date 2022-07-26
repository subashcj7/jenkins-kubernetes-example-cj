'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hi mates, I have deployed nodejs app using my docker image into kubernetes');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
