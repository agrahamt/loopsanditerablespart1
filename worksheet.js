/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
var numArray = [2,6,15,32]
var sumArray = function (array) {
var counter = 0
var sum = 0
  while (counter < array.length)
if (typeof array[counter] !== 'number')
    counter = counter + 1
else if (typeof array[counter] === 'number')
	sum = sum + array[counter]
    counter = counter + 1
    }
    return sum
}
console.log sumArray (numArray)

//alternative [also doesn't work]
var numArray = [2,6,15,32]
var sumArray = function (array) {
var sum = 0
  for (counter = 0; counter < numArray.length); i + 1) {
if (typeof array[counter] !== 'number')
else if (typeof array[counter] === 'number')
	sum = sum + array[counter]
    }
    return sum
}
console.log sumArray (numArray)
// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.
var numArray = [2,6,15,32]
var maxOfArray = function (array) {
	var counter=0
    var max = 0
	for (counter=0; counter < (array.length); counter ++) {
		if (max < array[counter]) {
			max = array[counter]
		}
	}
	return max
}
console.log(maxOfArray(numArray))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */
 var isVowel = function (char) {
 	if ((char = a) || (char = e) || (char = i) || (char = o) || (char = u) || (char = y)) {
 	return true
 	console.log("It is a vowel.")}
 	return false
 	console.log("it is not a vowel.")
 }
 
/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
var reverse = function(string) {
	var counter = string.length - 1;
	var reversal = ''
	for (; counter >=0; counter--) {
		reversal += string[counter]
	}
	return reversal
}
console.log(reverse('blarney'))

/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */
var fizzbuzz = function(num) {
	var string = ''
	for (var counter = 1; counter <= num; counter ++) {
		if 	((num[counter] % 3 !== 0) && (num[counter] % 5 !== 0) {
			string += '.'}
		else if ((num[counter] % 3 === 0) && (num[counter] % 5 === 0)) {
			string += 'fizzbuzz'}
		else if ((num[counter] % 3 === 0) && (num[counter] % 5 === 0)) {
			string += 'fizz'}		
		else if ((num[counter] % 3 === 0) && (num[counter] % 5 === 0)) {
			string += 'buzz'}		}
		}
	return string
}
console.log(fizzbuzz(23))



/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
var findLongestWord = function (string) {
	var longest = ''
	var array = string.split(" ")
	for (counter = 0; counter < array.length; counter ++) {
		if (array[counter] > longest) {
			longest = array [counter]
		}
	}
	return longest
}
log (findlongest('This is the time that tries mens souls.'))

/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
var GCD function (num1, num2) {
	GCD = 1
	for (var counter = num1; counter > 0; counter --) {
		if ((num1 % counter = 0) && (num2 % counter = 0)
			GCD = counter
	}
	return counter
}
LOG GCD (25,45)
