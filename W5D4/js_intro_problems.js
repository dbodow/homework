//////////// Part 1 ////////////////////////

/* Write a function that takes three strings - a verb, an adjective, and a noun
- uppercases and interpolates them into the sentence
"We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

> madLib('make', 'best', 'guac');
"We shall MAKE the BEST GUAC." */
function madLib(verb, adjective, noun) {
  verb = verb.toUpperCase()
  adjective = adjective.toUpperCase()
  noun = noun.toUpperCase()
  return `We shall ${verb} the ${adjective} ${noun}.`;
}

/* > isSubstring("time to program", "time")
true

> isSubstring("Jump for joy", "joys")
false */

function isSubstring(searchString, subString) {
  for (start_i = 0; start_i < searchString.length; start_i++) {
    for (end_i = start_i + 1; end_i <= searchString.length; end_i++) {
      if (searchString.slice(start_i, end_i) === subString) { return true; }
    }
  }
  return false;
}

// fizzBuzz
//
// 3 and 5 are magic numbers.
//
// Define a function fizzBuzz(array) that takes an array and returns a new array
// of every number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(array) {
  let output = []
  array.forEach( function(element) {
    if ( (element % 3 !== 0 && element % 5 !== 0) || (element % 15 === 0) ) { output.push(element) }
  })
  return output;
}

// isPrime
//
// Define a function isPrime(number) that returns true if number is prime.
// Otherwise, false. Assume number is a positive integer.

function isPrime(number) {
  if (number === 1) { return false; }
  for (i = 2; i <= number / 2; i++) {
    if (number % i === 0) { return false; }
  }
  return true;
}

// sumOfNPrimes:
// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum
// of the first n prime numbers. Hint: use isPrime as a helper method.

// function sumOfNPrimes(n) {
//   if (n === 0) { return 0; }
//   let firstNPrimes = [];
//   let i = 2;
//   while (firstNPrimes.length < n) {
//     if (isPrime(i)) {
//       firstNPrimes.push(i)
//     }
//     i++
//   }
//
//   let acc = 0;
//   let sum = firstNPrimes.reduce( function(acc, cur) {
//     return acc + cur;
//   })
//   return sum;
// }

function sumOfNPrimes(n) {
  if (n === 0) { return 0; }

  function firstNPrimes(n) {
    let primesArray = []
    let i = 2;
    while (primesArray.length < n) {
      if (isPrime(i)) {
        primesArray.push(i)
      }
      i++
    }
    return primesArray;
  }

  let acc = 0;
  let sum = firstNPrimes(n).reduce( function(acc, cur) {
    return acc + cur;
  })
  return sum;
}

///////////////////// Part 2 //////////////////////////////////////////

// Write a function titleize that takes an array of names and a function (callback).
// titleize should use Array.prototype.map to create a new array full of titleized
// versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger
// Jingleheimer Schmidt". Then pass this new array of names to the callback, which
// should use Array.prototype.forEach to print out each titleized name.


function titleize(arrayOfNames, myCallback) {
  let myNames = arrayOfNames.map( function(name) {
    return `Mx. ${name} Jingleheimer Schmidt`;
  } )
  myCallback(myNames)
}

titleize(['Winnie', 'Pooh'], (arrayOfNames) => {
  arrayOfNames.forEach( function(name) {
    console.log(name)
  } );
})

// phase 2

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

// how to sample an array https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
Elephant.prototype.play = function () {
  randIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[randIndex]}!`);
};

// Phase III - Function Invocation

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

// Phase IV - Closures

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
