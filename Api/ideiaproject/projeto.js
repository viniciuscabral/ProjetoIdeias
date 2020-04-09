var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjetoSchema = new Schema({
    title: String,
    desc: String,
    link: String,
    tags: Array
});

module.exports = mongoose.model('Projeto', ProjetoSchema);