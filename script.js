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

/*

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

// Bind method
// book.call(eurowings, 23, 'Adam Williams');

const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLx = book.bind(swiss);

bookEw(23, 'Steven Williams');
// bookLh(35, 'James Lee');
// bookSwiss(55, 'Jay Webster');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('James Webster');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
	console.log(this);

	this.planes++
	console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addAT = value => value + value * 0.23;
console.log(addVAT(100));

// Function returning function
const addTaxRate = function(rate) {
	return function(value) {
		return value + value * rate;
	}
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));

*/

// CODING CHALLENGE 1
const poll = {
 question: "What is your favourite programming language?",
 options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
 // This generates [0, 0, 0, 0]. More in the next section!
 answers: new Array(4).fill(0),
	registerNewAnswer() {
		// Get answer
		const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
		// console.log(answer);
		// Register answer
		typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
		this.displayResults();
		this.displayResults('string');
	},
	displayResults(type = 'array') {
		if(type === 'array') {
			console.log(this.answers);
		} else if (type === 'string') {
			// Poll results are 13, 2, 4, 1
			console.log(`Poll results are ${this.answers.join(', ')}`);
		}
	}
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');