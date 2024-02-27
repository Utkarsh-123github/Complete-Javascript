// declaring object

let obj1 = {
    name: "Utkarsh Tiwari",
    age: 21,
    isLoggedIn: false
}

console.log(obj1)

// accessing elements of obj1
console.log(obj1.name) // Method 1
console.log(obj1["name"]) // Method 2

// Task :- Insert a symbol inside an object 
let sym = Symbol("Key1")

let obj2 = {
    name: "Utkarsh Tiwari",
    age: 21,
    isLoggedIn: false,
    [sym]: "my first symbol"    
}

console.log(obj2[sym])

// Changing the values of object element

obj2.name = "Utkar$h Tiwari"
console.log(obj2)

// We can freeze an object which will prevent all further modifications in an object

Object.freeze(obj2)
// Ab agar hum koi bhi changes krenge to wo reflect nhi hoga
obj2.age = 40
console.log(obj2)
// {
//     name: 'Utkar$h Tiwari',
//     age: 21,
//     isLoggedIn: false,
//     [Symbol(Key1)]: 'my first symbol'
// }

// Inserting a function 

obj1.greeting = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(obj1.greeting())