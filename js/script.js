"use strict"

function resetGrid(){
    let container_grid = document.getElementById("container-grid");
    container_grid.innerHTML = " ";
}

//DICHIARO FUNZIONE PER CREARE LA GRIGLIA
function makeGrid(n){ 
    
    resetGrid()

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

//inserisco la griglia 10x10 dentro all'evento click del pulsante Play
buttonPlay.addEventListener("click", function(){
    makeGrid(10);
    
})



// //Recupero il pulsante del dom che resetta la griglia
// let buttonReset = document.getElementById("reset");

// //inserisco la funzione reset al click del pulsante Reset
// buttonReset.addEventListener("click", function(){
    
//     resetGrid();
    
// })

