let number = document.getElementById("score")


let count = 0
let countEl = 0


function add1(){
    count += 1
    number.textContent = count

}

function add2(){
    count += 2
    number.textContent = count
}

function add3(){
    count += 3
    number.textContent = count
}

function timeout(){
    alert ("TIME OUT!!!")
}


let guestNumber = document.getElementById("guest")

function add1el (){
    countEl += 1
    guestNumber.textContent = countEl
}

function add2el(){
    countEl += 2
    guestNumber.textContent = countEl
}

function add3el(){
    countEl += 3
    guestNumber.textContent = countEl
}





