import { BloqueHTML } from "./Xenerico-export";

class BloqueNavegacion<T> {
    private etiqueta: T;
    constructor(etiqueta:T){
        this.etiqueta = etiqueta
    }
}

let etiquetaA = new BloqueHTML (document.createElement("a"));
let etiqueta = new BloqueNavegacion<BloqueHTML>(etiquetaA)