export class Padre{
    protected titulo:string;
    protected cantidadPag:number;
    protected autor:string;
    protected precio:number;

    constructor(pTitulo:string,pCantidadPag:number,pAutor:string,pPrecio:number){
        this.titulo=pTitulo;
        this.cantidadPag=pCantidadPag;
        this.autor=pAutor;
        this.precio=pPrecio;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public getCantPaginas():number{
        return this.cantidadPag;
    }
    public getAutor():string{
        return this.autor;
    }
    public getPrecio():number{
        return this.precio;
    }
}