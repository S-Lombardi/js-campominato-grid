L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


PRIMA PARTE : 

1-Realizzare un pulsante di input all'interno del DOM;
2-Recuperare il pulsante assegnandogli una costante;
3-Creare una funzione che genera una griglia ( anche se decido di cambiare il numero delle caselle --> modificare anche width delle caselle );
 3.1 Dentro la funzione creo un ciclo for che mi stampa i numeri da 1 a n;
 3.2 Nel ciclo for creo un elemento div ( la singola casella) ;
 3.3 Assegno al div precedentemente creato una classe che mi definisce le misure della casella;
   3.3.1 Utilizzare ciclo for per modificare  il calcolo della dimensione delle caselle --> calc(100% / 100 o 9 o 7)
 3.4. Inserisco con InnerHTML il numero "i" , ovvero l'indice di partenza del ciclo for
 3.5 Recupero il contenitore nel DOM ( al quale do nel css una classe flex e wrap) nel quale inserisco il div

SECONDA PARTE : 