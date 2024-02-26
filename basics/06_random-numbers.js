// Generate random numbers between 1 to 10

randnum = Math.floor((Math.random()*10)+1)
console.log(randnum)

// Generate random number between 10 and 20 using generic formula

let minNum = 10
let maxNum = 20

randNum = Math.floor((Math.random()*(maxNum-minNum + 1))+minNum)
console.log(randNum)