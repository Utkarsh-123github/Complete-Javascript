// Normally we destructure objects using dot notation but here we'll see a new method to destructure an object
let user1 = {
    name:"Utkarsh",
    course:"Javascript",
    courseInstructor:"Hitesh"
}

// Normal method to destructure using dot notation
console.log(user1.courseInstructor)

// New method

let {courseInstructor} = user1
console.log(courseInstructor)

// We can also change object property name to something else as per our ease
let {courseInstructor: instructor} = user1
console.log(instructor)
