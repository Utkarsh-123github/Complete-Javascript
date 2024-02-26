let myDate = new Date()
console.log(typeof myDate) // Object
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())

// Create a specified date

let newDate = new Date(2024,1,26) // year than month(month has 0 based indexing) than date
console.log(newDate.toDateString())