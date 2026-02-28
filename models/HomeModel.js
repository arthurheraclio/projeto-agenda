const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, requied: true},
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;