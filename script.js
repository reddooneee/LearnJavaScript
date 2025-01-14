


//Const (Constante) crea un paragrafo all'interno del documento 
const count_null = document.createElement('p');

//Assegnamo un id a count_null (Chiamato count_null)
count_null.id = "count_null";

const incrementButton = document.createElement('button');
incrementButton.textContent = "+1";
incrementButton.id = "incrementButton";

var count = 0; //Contatore Fissato A 0

function AggiornaCounter(){
    //viene impostato il valore del count(valore fissato a 0) a count_null che sarebbe il contatore effettivo
    count_null.textContent = count;
} 



const decrementButton = document.createElement('button');
decrementButton.textContent = "-1";
decrementButton.id = "decrementButton";

document.body.appendChild(count_null);


document.body.appendChild(incrementButton);
//Aggiunto un event listeer, dove a ogni click si avvia la funzione
incrementButton.addEventListener("click", function(){
    count++;
    AggiornaCounter();
})

document.body.appendChild(decrementButton);
//Aggiunto un event listeer, dove a ogni click si avvia la funzione
decrementButton.addEventListener("click", function(){
    count--
    AggiornaCounter();
})


//Bottone +10
const incrementButton10 = document.createElement('button')
document.body.appendChild(incrementButton10);
incrementButton10.textContent = "+10";
incrementButton10.id = "incrementButton10";

incrementButton10.addEventListener("click", function(){
    count += 10;
    AggiornaCounter();
})


const decrementButton10 = document.createElement('button')
document.body.appendChild(decrementButton10);
decrementButton10.textContent = "-10";
decrementButton10.id = "decrementButton10";

decrementButton10.addEventListener("click", function(){
    count -= 10;
    AggiornaCounter();
})




/*****************************************************Tramite programmazione a ogetti*****************************************************/




class Counter{
    constructor(){
        this.count = 0;
        this.count_null = document.createElement("p");
        this.count_null.textContent = this.count;
        document.body.appendChild(this.count_null);

        var incrementButtonClass = document.createElement('button')
        incrementButtonClass.textContent = '+1';
        incrementButtonClass.id = "incrementButtonClass";
        incrementButtonClass.onclick = () => this.increment();
        document.body.appendChild(incrementButtonClass);

        var decrementButtonClass = document.createElement('button')
        decrementButtonClass.textContent = '-1';
        decrementButtonClass.id = "decrementButtonClass";
        decrementButtonClass.onclick = () => this.decrement();
        document.body.appendChild(decrementButtonClass);

        var incrementButton10Class = document.createElement('button')
        incrementButton10Class.textContent = '+10';
        incrementButton10Class.id = "incrementButton10Class";
        incrementButton10Class.onclick = () => this.increment10();
        document.body.appendChild(incrementButton10Class);

    }
    
    



    //Metodo per incrementare il conteggio
    increment10(){
        this.count+=10;
        this.updateDisplay();
    }
    
    increment(){
        this.count++;
        this.updateDisplay();
    }

    decrement(){
        this.count--;
        this.updateDisplay();
    }


    updateDisplay(){
        this.count_null.textContent = this.count;
    }
}

var counter = new Counter(); //Istanziamento classe
