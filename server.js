const path = require('path');
const http = require('http');
const file = require('fs');

const server = http.createServer((req, res) => {
  const conteudo = file.readFileSync(path.resolve(__dirname, 'src/index.html'));
  res.end(conteudo);
})

server.listen(3000, () => {
  console.log('Server iniciado na porta 3000');
});
