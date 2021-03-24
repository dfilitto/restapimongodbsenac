const mongoose = require('../config/database');

//cria um schema para representar os dados
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    game: {type: String, required: true},
    score: {type: Number, required: true},
    nome: {type: String, require:true},
    email: {type: String, require:true}
});

//Exporta um modelo de dados que representa os dados no banco
module.exports = mongoose.model('score', ScoreSchema); 