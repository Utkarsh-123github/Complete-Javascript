let num1 = 100.236
console.log(num1);
console.log(typeof num1);
console.log(num1.length)//undefined

// Rounding off to two decimal places
console.log(num1.toFixed(2))

// Converting to string and counting length
console.log(num1.toString().length)

// writing upto given number of significant digits
console.log(num1.toPrecision(4)) // upto four significant digits

// writing big numbers with commas as per Indian standards
let num2 = 1000000
console.log(num2.toLocaleString())

// *************MATHS***********

console.log(Math.abs(-4)) // 4
console.log(Math.round(2.334)) //2
console.log(Math.floor(2.9)) // 2
console.log(Math.ceil(2.2)) // 3

console.log(Math.sqrt(20))