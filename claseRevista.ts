import { Padre } from "./clasePadre";

export class Revista extends Padre{
    private numero:number;
    private año:number;

    public constructor(pTitulo:string,pCantidadPag:number,pAutor:string,pPrecio:number,pNumero:number,pAño:number){
        super(pTitulo,pCantidadPag,pAutor,pPrecio)
        this.numero=pNumero;
        this.año=pAño;
    }
    public getNumero():number{
        return this.numero;
    }
    public getAño():number{
        return this.año;
    }
}