c = prompt('๐ Enter operator ( either +, -, * or / ): ');
var a = parseFloat(prompt('๐ Enter first number: '));
var b = parseFloat(prompt('๐ Enter second number: '));

let result;

if (c == '+') {
    result = a + b;
}
else if (c == '-') {
    result = a - b;
}
else if (c == '*') {
    result = a * b;
}
else {
    result = a / b;
}

console.log(`${a} ${c} ${b} = ${result}`);
prompt(`๐งพ Your answer is ${result}`);
console.log(`Thanks for using simple calculator \n Made by Gameking5678 `);
