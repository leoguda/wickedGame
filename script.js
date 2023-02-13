let randomNum=document.getElementById("randomNumber").innerHTML=Math.floor(Math.random()*11);
let xNumber=document.getElementById("consumerChoice");
let win=document.getElementById("win");
let lose=document.getElementById("lose");
let incorrect=document.getElementById("incorrect");
let one=document.getElementById("chance");
let randomNumP=document.getElementById("randomNumber-p");
let check=document.getElementById("check");
let attempts=3;

function game(){
    if(+xNumber.value === randomNum){
        win.style.display="block";
        incorrect.style.display="none";
        lose.style.display="none";
        check.style.display="none";
        attempts=3;
    }else{
        win.style.display="none";
        incorrect.style.display="block";
        lose.style.display="none";
        attempts--;
        one.innerHTML=attempts;
    }
    if(attempts === 0){
        win.style.display="none";
        incorrect.style.display="none";
        lose.style.display="flex";
        check.style.display="none";
        randomNumP.style.color="white";
        randomNumP.style.backgroundColor="black";
    }
}
check.addEventListener("click",game);
