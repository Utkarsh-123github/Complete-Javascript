// Declaring array
// Method 1
let arr = [1,2,3,4,"Utkarsh"]
console.log(arr)

// Method 2
let arr2 = new Array(1,2,3,4,"Utkarsh")
console.log(arr2)


// *********Array methods**********

arr2.push(5)
console.log(arr2)
arr2.pop()
console.log(arr2)

console.log(arr2.includes("Utkarsh"))
console.log(arr2.indexOf(2))

// converting array to string
let newArr = arr2.join()
console.log(newArr)
console.log(typeof newArr)

// Slicing of array
let a1 = [10,20,30,40,50,60,70]
console.log("A ",a1)
let s1 = a1.slice(1,4)
console.log("S1 ",s1)
console.log("B ",a1)

// Splicing an array
let sp1 = a1.splice(1,4)
console.log("SP1 ",sp1)
console.log("C ",a1)

// Difference between slice and splice
// slice returns a piece of the array but it doesn't affect the original array. 
// splice changes the original array by removing, replacing, or adding values and returns the affected values.



