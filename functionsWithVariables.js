/**Defining the functions */

// product function
function Product(number1, number2) {
    var product = number1 * number2; // compute the product
    console.log(product);
}
// The summing functions
function Sum(number1, number2) {
    var sum = number1 + number2; // compute the sum 
    console.log(sum);
}
// the quotient function
function Quotient(number1, number2) {
    var quotient = number1 / number2; // compute the quotient
    console.log(quotient);
}

// Declare the variables
// invoking the product function
var number1 = 123;
var number2 = 10;
console.log("The product of numbers is: ");
Product(number1, number2);

// invoking the quotient function
console.log("The quotient of numbers is: ");
Quotient(number1, number2);

// invoking the sum function
console.log("The sum of numbers is: ");
Sum(number1, number2);
