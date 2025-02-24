class UnXenerico<T> {
    valor;
    constructor(valor:T){
        this.valor = valor;
    }
}

let instanciaUnXenerico = new UnXenerico<number>(5);
let instanciaUnXenerico2 = new UnXenerico<string>("texto");
let instanciaUnXenerico3 = new UnXenerico<HTMLAnchorElement>(document.createElement("a"));

///////////////////////////////////////////////////////////////////////////

class UnHtml<HTMLAnchorElement> {
    oAnchor;
    constructor(oAnchor:HTMLAnchorElement){
        this.oAnchor = oAnchor
    }
}
let instanciaUnAnchor = new UnHtml(document.createElement("p"))
let instanciaUnAnchor1 = new UnHTML <string> ("ddhd")

///////////////////////////////////////////////////////////////////////////
