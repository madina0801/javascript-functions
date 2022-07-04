'use strict';

// DEFAULT VALUES
/*
const bookings = [];

const createBooking = function(numFlight, numPassenger = 1, price = 199 * numPassenger) {
	// ES5
	// numPassenger = numPassenger || 1;
	// price = price || 199;

	const booking = {
		numFlight,
		numPassenger,
		price
	}

	console.log(booking);
	bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 208);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000);
*/

// PASSING ARGUMENTS
/*
const flight = 'LH123';
const jake = {
	name: 'Jake Lee',
	passport: 123456789
}

const checkIn = function(flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr. ' + passenger.name;

	if(passenger.passport === 123456789) {
		alert('Check in!')
	} else {
		alert('Wrong passport!')
	}
}

// checkIn(flight, jake);
// console.log(flight, jake);

// Is the same as doing ...
const flightNum = flight;
const passenger = jake;

const newPassport = function(person) {
	person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(jake);
checkIn(flight, jake);
*/

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

/*

const oneWord = function(str) {
	return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function(str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
}

// JS uses callbacks all the time

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
	console.log('👋🏻');
}

document.body.addEventListener('click', high5);
['Jonas', 'Jake', 'Adam'].forEach(high5);
*/

// FUNCTIONS RETURNING FUNCTIONS

const greet = function(greeting) {
	return function(name) {
		console.log(`${greeting} ${name}!`);
	}
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jake');

const greetArrow = greeting => name => console.log(`${greeting} ${name}!`);

greetArrow('Goodnight')('Jay');

// 

const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(`${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`);
		this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
	}
}

const book = lufthansa.book;

lufthansa.book(123, 'Jake Lee');
lufthansa.book(789, 'John Smith');
console.log(lufthansa);

const eurowings = {
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: []
};

// Call method

book.call(eurowings, 23, 'Adam Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'James Cooper');

const swiss = {
	airline: 'Swiss Air Lines',
	iataCode: 'LX',
	bookings: []
}

book.call(swiss, 575, 'Niki Jones');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);