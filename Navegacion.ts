
interface BloqueLinksNavegacion {
    etiquetaA: HTMLAnchorElement;
    etiquetaImg: HTMLImageElement;
    etiquetaDiv: HTMLDivElement;
}

abstract class Navegacion implements BloqueLinksNavegacion {
    public etiquetaA: HTMLAnchorElement;
    public etiquetaImg: HTMLImageElement;
    public etiquetaDiv: HTMLDivElement;

    constructor(etiquetaA: HTMLAnchorElement, etiquetaImg: HTMLImageElement, etiquetaDiv: HTMLDivElement) {
        this.etiquetaA = etiquetaA;
        this.etiquetaImg = etiquetaImg;
        this.etiquetaDiv = etiquetaDiv;
    }

    abstract crearAtributos(): void;
    abstract pintarEnPantalla(): void;
    abstract establecerEstilo(): void;
}

export {
    Navegacion
}



