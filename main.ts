import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Libreria } from "./claseLibreria";


let autores =['Pedro','Rosa','Fabian'];
let generos = ['Drama','Terror','Comedia','Vaqueros'];

let cliente1:Cliente = new Cliente('Juan','Perez',111,'ASDAS',autores,generos,0.1);
let cliente2:Cliente = new Cliente('Javer','Paez',222,'Nuñez',autores,generos,0.3);

let libro1:Libro=new Libro('Titulo1',140,'Pedro',2100,'Comedia','asdasdas');
let libro2:Libro=new Libro('Titulo2',340,'Rosa',500,'Drama','asdasdas');


let revista1:Revista=new Revista('Para ti',20,'Rosa',20,5,2022);
let revista2:Revista=new Revista('Oeste',10,'Araceli',10,3,2012);

let arregloCliente:Cliente[]=[cliente1,cliente2];
let arregloRevistas:Revista[]=[revista1,revista2];
let arregloLibro:Libro[]=[libro1,libro2];

let libreria1:Libreria=new Libreria(arregloCliente,arregloLibro,arregloRevistas);

let primerPrecio=libreria1.calcularPrecio(cliente1,revista1);
console.log(primerPrecio);
let buscar1=libreria1.buscarRevista(revista1);
console.log(buscar1);
let busca2=libreria1.buscarLibro(libro2);
console.log(busca2);
cliente1.compraLibro(libro2);
cliente2.compraRevista(revista1);
cliente1.GustoLibro(libro2);
cliente1.GustoLibro(libro1);
console.log(cliente1);
cliente2.GustoLibroExigente(libro1);
console.log(cliente2);

