let name = "Utkarsh Tiwari"
let age = 20
console.log(`My name is ${name} and I am ${age} years old.`)
console.log(name.toUpperCase())
console.log(name)
// Notice that the orignal name is not changed to Upper case.
// Its copy has been changed to Upper case.
console.log(name.charAt(2))
console.log(name.indexOf('a'))
// indexOf return the first index at which the given character is located

// Substring in JS

let x = name.substring(0,6)
console.log(x);

// String slicing in JS

let y = name.slice(0,6)
console.log(y);

// Trimming(removing spaces)

let z = "  New Zealand    "
console.log(z)
console.log(z.trim())

// replacing in string

let email = "utk0703@gmail.com"
console.log(email)
console.log(email.replace('utk','utkarsh'))

// converting string to array

let sentence = "My name is Utkarsh Tiwari"
let words = sentence.split(' ')
console.log(words)
let letters = sentence.split()
console.log(letters)
