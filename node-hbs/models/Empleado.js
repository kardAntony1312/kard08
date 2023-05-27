var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    cargo: {type: String, required: true},
    salario: {type: Number, required: true},
    edad: {type: String, required: true},
    email: {type: String, required: true},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
