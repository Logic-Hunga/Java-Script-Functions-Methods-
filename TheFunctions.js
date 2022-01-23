// defining the functions
function summation(number1, number2, number3, number4) {
    var total = number1 + number2 + number3 + number4;
    console.log(total);
} 
function subtraction(number1, number2, number3, number4) {
    var total = number1 - number2 - number3 - number4;
    console.log(total);
}
function multiplication(number1, number2, number3, number4) {
    var total = number1 * number2 * number3 * number4;
    console.log(total);
}
function division(number1, number2) {
    var total = number1 / number2 / number3 / number4;
    console.log(total);
}

// declaring the variables
var number1 = 4;
var number2 = 5;
var number3 = 1; 
var number4 = 33;

/**Invoking the functions */
console.log("The sum  of numbers is: ");
summation(number1, number2, number3, number4);

console.log("The difference of numbers is: ");
subtraction(number1, number2, number3, number4);

console.log("The product of numbers is: ");
multiplication(number1, number2, number3, number4);

console.log("The quotient is: ");
division(number1, number2, number3, number4);