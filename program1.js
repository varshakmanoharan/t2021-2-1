
"use strict";
const ps = require("prompt-sync");
const prompt =ps();
const op = prompt('Select operator to perform calculation ( either +, -, * or / ): ');
const n1 = parseFloat(prompt('Enter first number: '));
const n2 = parseFloat(prompt('Enter second number: '));
let result;
if (op == '+') {
    result = n1 + n2;
}
else if (op == '-') {
    result = n1 - n2;
}
else if (op == '*') {
    result = n1 * n2;
}
else {
    result = n1 / n2;
}
console.log(`${n1} ${op} ${n2} = ${result}`);