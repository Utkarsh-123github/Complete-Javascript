const nums = [1,2,3,4,5,6,7,8,9,10]

const sum = nums.reduce( (accumulator,currentValue) => {
    console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`)
    return accumulator + currentValue
}, 0 )

console.log(sum)