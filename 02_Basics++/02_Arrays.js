let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

// merging two arrays
// Method 1
let arr3 = arr1.concat(arr2)
console.log(arr3)

// Method 2
let arr4 = [...arr1 , ...arr2]
console.log(arr3)

// flat :- array ke andar array hai to ye un sab ko ek single array me convert krdeta hai

let arr = [1,2,3,[4,5],[6,[7,8,9]]]
console.log(arr.flat(Infinity)) // Infinity yaha pe depth ke liye hai kyuki kabhi kabhi array ke andar array or uske andar bhi array hota hai

// Creating array from given value
console.log(Array.from("UTKARSH TIWARI"))

// Creating array from given set of values
console.log(Array.of(100,200,300,400))

