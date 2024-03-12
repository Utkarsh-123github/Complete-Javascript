// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Printed after 3 seconds")
//         resolve()
//     },3000)
// })

// promiseOne.then(function(){
//     console.log("PromiseOne is consumed.")
// })

// let promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 completed. Printed after 6 seconds.")
//         resolve({username: "Utkarsh" , contact: 9076679364})
//     },6000)
// })

// promiseTwo.then(function(user){
//     console.log(user)
//     console.log(user.contact)
// })


// let promiseThree = new Promise((resolve,reject)=>{
//     let error = false;
//     // If error is true then the reject part will be consumed
//     if(!error)
//     {
//         resolve({user:"Kajal",contact: 9076679364})
//     }
//     else{
//         reject('ERROR : Oops ! Something went wrong !!')
//     }
// })

// // Promise chaining

// promiseThree.then((user1)=>{
//     console.log(user1)
//     return user1.user
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(error => console.log(error))

// let promiseFour = new Promise((resolve,reject)=>{
//     let error = true;
//     if(!error){
//         resolve({language: "Javascript"})
//     } else{
//         reject('JS failed !!!!')
//     }
// })

// // consuming promise using async await with try catch block

// async function consumePromise(){
//     try{
//         const response = await promiseFour
//         console.log(response.language)
//     } catch(error){
//         console.log(error)
//     }
// }

// consumePromise()

// Fetching user data form an external API using async await

// async function fetchUserData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     // here we have applied await bcoz converting reponse to json also takes some time
//     console.log(data)
// }

// fetchUserData()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response){
    let data = response.json()
    return data
})
.then(function(data){
    console.log(data)
})