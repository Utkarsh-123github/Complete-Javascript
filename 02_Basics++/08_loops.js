// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

// for of loop in maps

const map = new Map()
map.set(1,'K')
map.set(2,'A')
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`)
}

// Note :- Objects are not iterable using for of loop
// For objects we use for in loop 

const obj = {
    1: 'U',
    2: 'T'
}

for (const key in obj) {
    console.log(`${key} :- ${obj[key]}`)
}

// Note:- Maps are not iterable using for in loop

// forEach loop for arrays:-
const languages = ["JS", "C++", "python", "ruby", "typescript"]
languages.forEach( function(item){
    console.log(item)
} )

// Accessing object items present in an array using forEach loop
const array1 = [
    {
        languageName: "Javascript",
        fileName: "js"
    },
    {
        languageName: "C++",
        fileName: "cpp"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]

array1.forEach( (item)=>{
    console.log(item.languageName , item.fileName)
} )