// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Richiesta dati utente
let priceKm = 0.21;
let priceKmDisocunt;

let numKmUser = parseInt(prompt("Quanti chilomenti vuoi percorrere?"));

let ageUser = parseInt(prompt("Quanti anni hai?"));

console.log("questi sono i chilomentri che l'utente vuole percorrere ", numKmUser);
console.log("questa è l'età dell'utente", ageUser);

// Condizione di età per sconto
if (ageUser > 65){
    priceKmDisocunt = (0.21 * 0.4)
} else if (ageUser < 18){
    priceKmDisocunt = (0.21 * 0.2)
} else {
    priceKmDisocunt = 0
}

console.log("questo è lo sconto al chilomentro", priceKmDisocunt);

let ticketPrice = ((priceKm - priceKmDisocunt) * numKmUser);
console.log(ticketPrice)
console.log("Il prezzo per il biglietto è di", ticketPrice + "€")

