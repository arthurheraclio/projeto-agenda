const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    titulo: {type: String, requied: true},
    descricao: String
})

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
      this.body = body; 
      this.errors = [];
      this.user = null;
    }

    register(){
        this.valida();
    }

    valida(){
        //validacao
        //email tem que ser válido
        //senha forte tbm
    }

}

module.exports = Login;