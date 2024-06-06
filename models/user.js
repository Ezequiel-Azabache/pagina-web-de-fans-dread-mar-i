const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  fechaNacimiento: Date,
  genero: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;