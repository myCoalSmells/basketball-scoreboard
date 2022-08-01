let a = 0
let b = 0

let teamAScore = document.getElementById("team-a")
let teamBScore = document.getElementById("team-b")

function plus1a(){
    a+=1
    teamAScore.textContent = a
}

function plus2a(){
    a+=2
    teamAScore.textContent = a
}

function plus3a(){
    a+=3
    teamAScore.textContent = a
}

function plus1b(){
    b+=1
    teamBScore.textContent = b
}

function plus2b(){
    b+=2
    teamBScore.textContent = b
}

function plus3b(){
    b+=3
    teamBScore.textContent = b
}

function restart(){
    a=0
    b=0
    teamAScore.textContent=a
    teamBScore.textContent=b
}