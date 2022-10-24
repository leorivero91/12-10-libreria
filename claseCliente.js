"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(pNombre, pApellido, pDNI, pDireccion, pListaAutorFav, pListaGenFav, pDescuento) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.DNI = pDNI;
        this.direccion = pDireccion;
        this.listaAutorFav = pListaAutorFav;
        this.listaGenFav = pListaGenFav;
        this.listaComprasLibros = [];
        this.listaComprasRevistas = [];
        this.descuento = pDescuento;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getApellido = function () {
        return this.apellido;
    };
    Cliente.prototype.getDNI = function () {
        return this.DNI;
    };
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.getListaAutoresFavoritos = function () {
        return this.listaAutorFav;
    };
    Cliente.prototype.getListaGeneroFavoritos = function () {
        return this.listaGenFav;
    };
    Cliente.prototype.getListaComprasLibros = function () {
        return this.listaComprasLibros;
    };
    Cliente.prototype.getListaComprasRevistas = function () {
        return this.listaComprasRevistas;
    };
    Cliente.prototype.compraLibro = function (libro) {
        this.listaComprasLibros.push(libro);
    };
    Cliente.prototype.compraRevista = function (revista) {
        this.listaComprasRevistas.push(revista);
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    Cliente.prototype.buscarLibro = function (art) {
        var encontrado = false;
        for (var i = 0; i < this.listaComprasLibros.length; i++) {
            if (art.getTitulo() === this.listaComprasLibros[i].getTitulo()) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El libro ".concat(art.getTitulo(), " fue comprado"));
        }
        else {
            console.log("El libro ".concat(art.getTitulo(), " no fue comprado"));
        }
    };
    Cliente.prototype.buscarRevista = function (art) {
        var encontrado = false;
        for (var i = 0; i < this.listaComprasRevistas.length; i++) {
            if (art.getTitulo() === this.listaComprasRevistas[i].getTitulo()) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("La revista ".concat(art.getTitulo(), " fue comprada"));
        }
        else {
            console.log("La revista ".concat(art.getTitulo(), " no fue comprada"));
        }
    };
    Cliente.prototype.GustoLibro = function (libro) {
        var encontrado = false;
        for (var i = 0; i < this.listaAutorFav.length; i++) {
            if (libro.getAutor() === this.listaAutorFav[i]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El autor ".concat(libro.getAutor(), " es favorito"));
        }
        else {
            console.log("El autor ".concat(libro.getAutor(), " no es favorito"));
        }
    };
    Cliente.prototype.GustoLibroExigente = function (libro) {
        var encontradoAutor = false;
        var encontradoGenero = false;
        for (var i = 0; i < this.listaAutorFav.length; i++) {
            if (libro.getAutor() === this.listaAutorFav[i]) {
                encontradoAutor = true;
            }
            for (var i_1 = 0; i_1 < this.listaGenFav.length; i_1++) {
                if (libro.getGenero() === this.listaGenFav[i_1]) {
                    encontradoGenero = true;
                }
            }
        }
        if (encontradoAutor === true && encontradoGenero === true) {
            console.log("El autor ".concat(libro.getAutor(), " y el g\u00E9nero \"").concat(libro.getGenero(), "\" son favoritos"));
        }
        else {
            console.log("El autor ".concat(libro.getAutor(), " y el g\u00E9nero \"").concat(libro.getGenero(), "\" no son favoritos"));
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
