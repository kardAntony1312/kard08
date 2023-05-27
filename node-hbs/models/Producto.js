var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    cantidad: {type: Number, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', ProductoSchema);
