import { Padre } from "./clasePadre";

export class Libro extends Padre{
    private genero:string;
    private resumen:string;

    public constructor(pTitulo:string,pCantidadPag:number,pAutor:string,pPrecio:number,pGenero:string,pResumen:string){
        super(pTitulo,pCantidadPag,pAutor,pPrecio)
        this.genero=pGenero;
        this.resumen=pResumen;
    }
    public getResumen():string{
        return this.resumen;
    }
    public getGenero():string{
        return this.genero;
    }
}