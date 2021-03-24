const express = require('express');
const open = require('open');
const gameRouter = require('./routes/gameRoutes');
const server = express();

server.use(express.json());
server.use(gameRouter);
 
server.listen(3000,()=>{
    console.log('Servidor REST API do Senac Presidente Prudente');
    console.log('Servidor on-line na porta 3000');
    console.log('Para acessar o servidor abra o navegador e digite http://localhost:3000');
    // opens the url in the default browser 
    //open('http://localhost:3000');
    // specify the app to open in 
    //open('http://sindresorhus.com', {app: 'firefox'});
});