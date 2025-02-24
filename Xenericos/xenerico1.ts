class UnHTML {
    oAnchor;
    constructor(oAnchor:HTMLAnchorElement){
        this.oAnchor = oAnchor;
    }
}
let UnHtml1 = new UnHTML(document.createElement("a"))
//let UnHtml2 = new UnHTML(document.createElement("p")) //Erro por que é un "p"