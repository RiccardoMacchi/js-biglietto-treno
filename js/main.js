// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Variabili dei prezzi
let priceKm = 0.21;
let priceKmDisocunt;

// Richiesta dati utente
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

// Prezzo pagato al km a seconda dell'età

let priceAgePerKm = (priceKm - priceKmDisocunt).toFixed(2)

let ticketPriceInfinity = ((priceKm - priceKmDisocunt) * numKmUser);
let ticketPrice = ticketPriceInfinity.toFixed(2)
// Stampa prezzi a seconda dell'età
console.log(ticketPrice)
console.log("Il prezzo per il biglietto è di", ticketPrice + "€")

// Stampa in pagina dei risultati nel testo

document.getElementById("num_km").innerHTML = numKmUser + "Km"
document.getElementById("price_km").innerHTML = priceAgePerKm + " x Km"
document.getElementById("ticket_price").innerHTML = ticketPrice + "€"

