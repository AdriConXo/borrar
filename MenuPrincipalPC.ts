import { EtiquetaA } from "./Etiquetas.ts";
import { Navegacion } from "./Navegacion";

interface BloqueLinksNavegacion {
   etiquetaA : HTMLAnchorElement;
   etiquetaImg: HTMLImageElement;
   etiquetaDiv: HTMLDivElement;
}

abstract class Navegacion implements BloqueLinksNavegacion{
    public etiquetaA : HTMLAnchorElement;
    public etiquetaImg: HTMLImageElement;
    public etiquetaDiv: HTMLDivElement;

    constructor(etiquetaA: HTMLAnchorElement, etiquetaImg: HTMLImageElement, etiquetaDiv: HTMLDivElement ){
    this.etiquetaA = etiquetaA;
    this.etiquetaImg = etiquetaImg,
    this.etiquetaDiv = etiquetaDiv;
    }
}
class NavegacionMenuPrincipal extends Navegacion {
    referenciaEtiquetaA: EtiquetaA;
    constructor(etiquetaA: HTMLAnchorElement, etiquetaImg: HTMLImageElement, etiquetaDiv: HTMLDivElement) {
        super(etiquetaA, etiquetaImg, etiquetaDiv);
        this.referenciaEtiquetaA = new EtiquetaA(etiquetaA)
    }
    
    crearAtributos(direccion:string): void {
        this.referenciaEtiquetaA.introducirAtributoHref(direccion)
        
    }
    pintarEnPantalla(): void {
        let datoEngadido : any;
        datoEngadido = this.referenciaEtiquetaA
        document.body.append(datoEngadido)
    }
    establecerEstilo(estilo:string) void {
        this.referenciaEtiquetaA.int

    }

}


let a = document.createElement("a");
let div = document.createElement("div");
let img = document.createElement("img");

let navegador = new NavegacionMenuPrincipal(a, img, div);
