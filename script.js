
    let ties=0;
    let computerscore=0;
    let playerscore=0;
    let computerchoice_var='';
    let playerchoice_var='';
    
function startGame(){
    document.getElementById('main').style.display="block";
    document.getElementById('start').style.display="none";
}
function Choice(){
    if(playerchoice_var=='rock'){
        document.getElementById('playerChoice').innerHTML='&#9994';
    }else if(playerchoice_var=='paper'){
        document.getElementById('playerChoice').innerHTML='&#9995'
    }else if(playerchoice_var=='scissor'){
        document.getElementById('playerChoice').innerHTML='&#9996'
    }

    if(computerchoice_var=='rock'){
        document.getElementById('computerChoice').innerHTML='&#9994';
    }else if(computerchoice_var=='paper'){
        document.getElementById('computerChoice').innerHTML='&#9995'
    }else if(computerchoice_var=='scissor'){
        document.getElementById('computerChoice').innerHTML ='&#9996'
    }
    

}

function computerChoice(){
    const rand =Math.random();
    if(rand>=0&&rand<=1/3){
        computerchoice_var='rock'
    }else if(rand>=1/3&&rand<=2/3){
        computerchoice_var='paper'
    }else if(rand>=2/3&&rand<=3/3){
        computerchoice_var='scissor'
    }
}
function scoreCard(){
        if (playerchoice_var===computerchoice_var){
        ties=ties+1;
    }
    else if (playerchoice_var=='rock'&&computerchoice_var=='paper'){
        computerscore=computerscore+1;
       
    }else if (playerchoice_var=='rock'&&computerchoice_var=='scissor'){
        playerscore=playerscore+1;
    }else if (playerchoice_var=='paper'&&computerchoice_var=='rock'){
        playerscore=playerscore+1;
    }else if (playerchoice_var=='paper'&&computerchoice_var=='scissor'){
      computerscore=computerscore+1;
    }else if (playerchoice_var=='scissor'&&computerchoice_var=='paper'){
        playerscore=playerscore+1; 
    }else if (playerchoice_var=='scissor'&&computerchoice_var=='rock'){
      computerscore=computerscore+1;
    }
    if(playerscore===6||computerscore===6){
        computerscore=0;
        ties=0;
        playerscore=0;
    }
    document.getElementById('loss').innerHTML=`Loses: ${computerscore}/5`;
    document.getElementById('win').innerHTML=`Wins: ${playerscore}/5`;
    document.getElementById('tie').innerHTML="ties: "+ties;
    
}
document.getElementById("darktheme").addEventListener("click", function(){
    let body = document.querySelector("body");
    document.querySelector("#darktheme").style.display="none";
    body.style.background="black";
    body.style.color="gray";
    document.querySelector("#default").style.display="block";
})
document.getElementById("default").addEventListener("click", function reset(){
    let body = document.querySelector("body");
    document.querySelector("#darktheme").style.display="block";
    body.style.background="";
    body.style.color="white";
    document.querySelector("#default").style.display="none";
})

