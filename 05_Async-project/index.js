const body = document.querySelector('body')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

let hexDigits = "0123456789ABCDEF"
let hexCodeGenerator = function(){
    let hexCode = "#"
    for(let i=0;i<6;i++){
        hexCode += hexDigits[Math.floor(Math.random()*16)]
    }
    return hexCode
}

// setInterval(hexCodeGenerator,1000)
let colorChangeInterval;
start.addEventListener('click',function(e){
    colorChangeInterval = setInterval(function(){
        let hex = hexCodeGenerator()
        body.style.backgroundColor = hex
    },1500)
});

stop.addEventListener('click',function(e){
    clearInterval(colorChangeInterval)
})
