const mongoose = require('mongoose');

//para utilizar o novo servidor de descoberta e monitoramento
mongoose.set('useUnifiedTopology', true); 

//string de conexão
const url = 'mongodb+srv://dbuser:senac111@cluster0.0lnbn.mongodb.net/scoregames?retryWrites=true&w=majority';

//conecta no banco - useNew serve para manter a compatibilidade com outras versões
mongoose.connect(url, { useNewUrlParser:true });

module.exports = mongoose;