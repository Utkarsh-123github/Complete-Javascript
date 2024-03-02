const nums = [1,2,3,4,5,6,7,8,9,10]

const doubled = nums.map( (item)=>{
    return item*2
} )

console.log(doubled)

// chaining

const arr = nums
                .map( (item)=> {
                   return item*10
                } )
                .map( (item)=>{
                    return item + 1
                } )
                .filter( (item)=> item > 50)

console.log(arr)