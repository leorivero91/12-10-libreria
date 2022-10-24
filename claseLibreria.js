"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(pListaClientes, pListaLibros, pListaRevistas) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevistas;
    }
    Libreria.prototype.setRevista = function (nuevaRevista) {
        this.listaRevistas.push(nuevaRevista);
    };
    Libreria.prototype.setLibro = function (nuevoLibro) {
        this.listaLibros.push(nuevoLibro);
    };
    Libreria.prototype.setCliente = function (nuevoCliente) {
        this.listaClientes.push(nuevoCliente);
    };
    Libreria.prototype.calcularPrecio = function (cliente, articulo) {
        var precioConDescuento = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    };
    Libreria.prototype.buscarRevista = function (pRevista) {
        for (var i = 0; i < this.listaRevistas.length; i++) {
            if (pRevista === this.listaRevistas[i]) { }
        }
        return "La revista es ".concat(pRevista.getTitulo());
    };
    Libreria.prototype.buscarLibro = function (pLibro) {
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (pLibro === this.listaLibros[i]) { }
        }
        return "El libro es ".concat(pLibro.getTitulo());
    };
    return Libreria;
}());
exports.Libreria = Libreria;
