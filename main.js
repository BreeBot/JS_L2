import Airplane from './Airplane.js'
import Flight from './Flight.js'
import Passenger from './Passenger.js'



// Part 1. 
//Instantiates at least one airplane object
// Instantiates at least one flight objec
//Uses scheduleFlight to add an existing flight to an existing airplane
let bigBertha = new Airplane("Big Bertha", "747-8", 605);
console.log(bigBertha);

let mauiHawaii = new Flight("July 4, 2021", "8:00am", "9:00am", "LAX", "Maui, HI");
console.log(mauiHawaii);

let barbados = new Flight("July 4, 2021", "8:00am", "9:00am", "LAX", "Barbados");
console.log(barbados);

bigBertha.scheduleFlight(barbados)
console.log(bigBertha)

//Part 2.
let dbCooper = new Passenger("DB Cooper");
console.log("dbCooper", dbCooper);
let pippy = new Passenger("pippy");
console.log("pippy", pippy);

//Part 3. 
let ticket1 = dbCooper.purchaseTicket(mauiHawaii, "12B")
let ticket2 = pippy.purchaseTicket(barbados, "C12")


console.log("DB Cooper after booking flight", dbCooper)
console.log("Db's ticket", ticket1)

console.log("Pippy after booking flight", pippy)
console.log("Pippy's ticket", ticket2)

