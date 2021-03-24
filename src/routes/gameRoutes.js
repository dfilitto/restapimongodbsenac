const express = require('express');
const router = express.Router();
const scoreController = require('../controller/scoreController'); 

//implementar as rotas
//update,create,delete,locate

//rota para ler os dados de um lugar
router.get('/',(req,res)=>{
    res.send('<h1>Bem vindo a nossa REST API</h1>');
});

//rota para gravar algo no banco
router.post('/score', scoreController.Create);
module.exports = router;