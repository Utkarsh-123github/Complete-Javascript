let bodyselector = document.querySelector('body')
// Method-1
// let greyButton = document.querySelector('#grey')
// greyButton.addEventListener('click',(e)=>{
//     bodyselector.style.backgroundColor = "grey"
// })
// let whiteButton = document.querySelector('#white')
// whiteButton.addEventListener('click',(e)=>{
//     bodyselector.style.backgroundColor = "white"
// })
// let blueButton = document.querySelector('#blue')
// blueButton.addEventListener('click',(e)=>{
//     bodyselector.style.backgroundColor = "blue"
// })
// let yellowButton = document.querySelector('#yellow')
// yellowButton.addEventListener('click',(e)=>{
//     bodyselector.style.backgroundColor = "yellow"
// })

// Method-2
const buttons = document.querySelectorAll('.button')
buttons.forEach(function(button){
    button.addEventListener('click',(e)=>{
        if (e.target.id === 'grey'){
            bodyselector.style.backgroundColor = 'grey'
        }
        else if(e.target.id === 'white'){
            bodyselector.style.backgroundColor = 'white'
        }
        else if(e.target.id === 'blue'){
            bodyselector.style.backgroundColor = 'blue'
        }
        else if(e.target.id === 'yellow'){
            bodyselector.style.backgroundColor = 'yellow'
        }
    })
})
