const password = "12345"
// This value cannot be changed further in the program
// Note:- If we declare a variable but did not assign any value to it then by default it'll get value as undefined
let city
let nameId = "Utkarsh"
console.log("Before altering : ")
console.table([password,nameId,city])

nameId = "Tinku"
city = "Varanasi"
console.log("After altering : ")

console.table([password,nameId,city])

// Earlier var was also used but now we avoid use of var because of issue in block scope and functional scope