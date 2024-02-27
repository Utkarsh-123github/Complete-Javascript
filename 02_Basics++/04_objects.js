// Nested Objects

let obj1 = {
    email: "utk0703@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Utkarsh",
            lastName: "Tiwari"
        }
    }
}

// console.log(obj1)
// console.log(obj1.email)
// console.log(obj1.fullName.userFullName.firstName)

// merging two objects

let object1 = {
    1:'a',
    2:'b'
}

let object2 = {
    3:'c',
    4:'d'
}
// Method 1
let object3 = Object.assign({},object1,object2)  
// bracket ke andar pehla argument target hota hai 
//jisko humlog empty object ke tarah show krte hai
// agar ye argument na de to sari merging object 1 me ho jayegi isliye object1 bhi change ho jayega
console.log(object3)

// Method 2
let object4 = {...object1 , ...object2}
console.log(object4)

// retrieving all the keys and values of an object
console.log(Object.keys(object1))
console.log(Object.values(object1))

// Checking whether an object has given property or not

console.log(object1.hasOwnProperty(1))