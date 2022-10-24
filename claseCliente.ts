import { Revista } from "./claseRevista";
import { Padre } from "./clasePadre";
import { Libro } from "./claseLibro";

export class Cliente {
    private nombre:string;
    private apellido:string;
    private DNI:number;
    private direccion:string;
    private listaAutorFav:string[];
    private listaGenFav:string[];
    private listaComprasLibros: Libro[];
    private listaComprasRevistas: Revista[];
    private descuento:number;

    public constructor(pNombre:string,pApellido:string,pDNI:number,pDireccion:string,pListaAutorFav:string[],pListaGenFav:string[],pDescuento?:number,){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.DNI=pDNI;
        this.direccion=pDireccion;
        this.listaAutorFav=pListaAutorFav;
        this.listaGenFav=pListaGenFav;
        this.listaComprasLibros=[];
        this.listaComprasRevistas=[];
        this.descuento=pDescuento;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public getDNI():number{
        return this.DNI;
    }
    public getDireccion():string{
        return this.direccion;
    }
    public getListaAutoresFavoritos():string[]{
        return this.listaAutorFav;
    }
    public getListaGeneroFavoritos():string[]{
        return this.listaGenFav;
    }
    public getListaComprasLibros(): Libro[]{
        return this.listaComprasLibros;
    }
    public getListaComprasRevistas(): Revista[]{
        return this.listaComprasRevistas;
    }
    public compraLibro(libro:Libro):void{
        this.listaComprasLibros.push(libro);
    }
    public compraRevista(revista:Revista):void{
        this.listaComprasRevistas.push(revista);
    }
    public getDescuento():number{
        return this.descuento;
    }
    public buscarLibro(art: Padre): void {
        let encontrado: boolean = false;
        for (let i: number = 0; i < this.listaComprasLibros.length; i++) {
            if (art.getTitulo() === this.listaComprasLibros[i].getTitulo()) {
            encontrado = true;
            }
        }
        if (encontrado === true) {
        console.log(`El libro ${art.getTitulo()} fue comprado`);
        } else {
        console.log(`El libro ${art.getTitulo()} no fue comprado`);
        }
    }

    public buscarRevista(art: Padre): void {
        let encontrado: boolean = false;
        for (let i: number = 0; i < this.listaComprasRevistas.length; i++) {
            if (art.getTitulo() === this.listaComprasRevistas[i].getTitulo()) {
            encontrado = true;
            }
        }
        if (encontrado === true) {
        console.log(`La revista ${art.getTitulo()} fue comprada`);
        } else {
        console.log(`La revista ${art.getTitulo()} no fue comprada`);
        }
    }
    public GustoLibro(libro: Libro): void {
        let encontrado: boolean = false;
        for (let i: number = 0; i < this.listaAutorFav.length; i++) {
            if (libro.getAutor() === this.listaAutorFav[i]) {
            encontrado = true;
            }
        }
        if (encontrado === true) {
        console.log(`El autor ${libro.getAutor()} es favorito`);
        } else {
        console.log(`El autor ${libro.getAutor()} no es favorito`);
        }
    }

    public GustoLibroExigente(libro: Libro): void {
        let encontradoAutor: boolean = false;
        let encontradoGenero: boolean = false;
        for (let i: number = 0; i < this.listaAutorFav.length; i++) {
            if (libro.getAutor() === this.listaAutorFav[i]) {
            encontradoAutor = true;
            }
            for (let i: number = 0; i < this.listaGenFav.length; i++) {
                if (libro.getGenero() === this.listaGenFav[i]) {
                    encontradoGenero = true;
                }
            }
        }
        if (encontradoAutor === true && encontradoGenero === true) {
        console.log(`El autor ${libro.getAutor()} y el género "${libro.getGenero()}" son favoritos`);
        } else {
        console.log(`El autor ${libro.getAutor()} y el género "${libro.getGenero()}" no son favoritos`);
        }
    }
}