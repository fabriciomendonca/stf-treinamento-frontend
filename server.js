const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, 'src')));

app.listen(3000, () => {
  console.log('Server iniciado na porta 3000');
})
