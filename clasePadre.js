"use strict";
exports.__esModule = true;
exports.Padre = void 0;
var Padre = /** @class */ (function () {
    function Padre(pTitulo, pCantidadPag, pAutor, pPrecio) {
        this.titulo = pTitulo;
        this.cantidadPag = pCantidadPag;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    Padre.prototype.getTitulo = function () {
        return this.titulo;
    };
    Padre.prototype.getCantPaginas = function () {
        return this.cantidadPag;
    };
    Padre.prototype.getAutor = function () {
        return this.autor;
    };
    Padre.prototype.getPrecio = function () {
        return this.precio;
    };
    return Padre;
}());
exports.Padre = Padre;
