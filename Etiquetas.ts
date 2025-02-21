class EtiquetaA <HTMLAnchorElement> {
    private etiquetaA;
    constructor(etiquetaA:Element){
        this.etiquetaA = etiquetaA;
    }
    intoducriAtributoHref (direccion:string){
        this.etiquetaA.setAttribute(`href`,direccion)
    }
    get valorRefEtiquetaA() {
        return this.etiquetaA
    }
}


export{EtiquetaA}