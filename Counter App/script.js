let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let plus = document.getElementById("plus");
let score = document.getElementById("score");

let scoreCounter = 0;

minus.addEventListener("click", e=>{
    scoreCounter -= 1;
    score.innerHTML = scoreCounter;
});

reset.addEventListener("click", e=>{
    scoreCounter = 0;
    score.innerHTML = scoreCounter;
});

plus.addEventListener("click", e=>{
    scoreCounter += 1;
    score.innerHTML = scoreCounter;
});