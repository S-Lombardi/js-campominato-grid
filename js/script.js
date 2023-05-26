"use strict"

//DICHIARO FUNZIONE PER CREARE LA GRIGLIA
function makeGrid(n){ 

    resetGrid();

    for(let i=1 ; i<=n*n ; i++){
        
        //Creo elemento div 
        let square = document.createElement("div");
        
        //Assegno al div una classe per le misure
        square.classList.add("box");   
        
        //Rendo modificabile la misura del div
        square.style.width = `calc(100% / ${n})`;
        
        //Inserisco i numeri delle caselle
        square.innerHTML = i; 
        
        //Recupero l'elemento in cui voglio inserire i quadrati
        let container_grid = document.getElementById("container-grid");
        
        //inserisco i quadrati nel dom
        container_grid.append(square);
        
        //al click i quadrati si colorano di azzuro 
        //in console vengono stampati i numeri delle caselle
        square.addEventListener('click', function(){       
            this.classList.add("click-blu");
            console.log(i)
        });
            
    }
    
}

//Recupero il pulsante del dom che al click genera la griglia
let buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", function(){
    
    makeGrid(10);

})




