

class Calcolatrice{

constructor(){
    
    this.count = 0;
    this.displayNum = document.createElement("p");
    this.displayNum.textContent = this.count;
    document.body.appendChild(this.displayNum);






    this.creaBottoniNum();
    this.creaBottoniOperazioni();
}



creaBottoniNum() {
    for (let i = 0; i < 11; i++) {
        let bottone = document.createElement("button");
        bottone.id = "BottoniNum";
        bottone.textContent = i;
        document.getElementById("ContenitoreNumeri").appendChild(bottone);
    }
}


creaBottoniOperazioni() {
    for (let i = 0; i < 5; i++) {
        let bottone = document.createElement("button")
        document.body.appendChild(bottone)
    }
}

}

const CalcolatriceApp = new Calcolatrice();
