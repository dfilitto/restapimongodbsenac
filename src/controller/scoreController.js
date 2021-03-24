const ModelScore = require('../model/modelScore');
//const { response } = require('express');

class ScoreController {
    //post - create
    async Create(req,res){
        //recupera os dados da requisição e transforma em um modelo
        const score = new ModelScore(req.body);
        await score
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(erro=>{
            return res.status(500).json(erro);
        });
    }
    //put - update
    //delete - delete
    //get - select 
}

module.exports = new ScoreController();