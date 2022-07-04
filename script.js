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

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
	console.log('👋🏻');
}

document.body.addEventListener('click', high5)