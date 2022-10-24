import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";

export class Libreria{
    private listaClientes:Cliente[];
    private listaLibros:Libro[];
    private listaRevistas:Revista[];

    public constructor(pListaClientes:Cliente[],pListaLibros:Libro[],pListaRevistas:Revista[]){
        this.listaClientes=pListaClientes;
        this.listaLibros=pListaLibros;
        this.listaRevistas=pListaRevistas;
    }
    public setRevista(nuevaRevista:Revista):void{
        this.listaRevistas.push(nuevaRevista);
    }
    public setLibro(nuevoLibro:Libro):void{
        this.listaLibros.push(nuevoLibro);
    }
    public setCliente(nuevoCliente:Cliente):void{
        this.listaClientes.push(nuevoCliente);
    }
    public calcularPrecio(cliente:Cliente,articulo:Padre):number{
        let precioConDescuento:number=0;
        precioConDescuento=articulo.getPrecio()*(1-cliente.getDescuento());
        return precioConDescuento;
    }
    public buscarRevista(pRevista:Revista):string{
        for(let i:number=0;i<this.listaRevistas.length;i++){
            if(pRevista===this.listaRevistas[i]){}
        } return `La revista es ${pRevista.getTitulo()}`
    }
    public buscarLibro(pLibro:Libro):string{
        for(let i:number=0;i<this.listaLibros.length;i++){
            if(pLibro===this.listaLibros[i]){}
        } return `El libro es ${pLibro.getTitulo()}`
    }
}