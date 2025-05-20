let win = 0;
let lost = 0;
let tie = 0;
const botChoices = ["rock", "paper", "scissors"];
const bothChoicesDiv = document.getElementById("bothChoices");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const gameResultDiv = document.getElementById("gameResult");
const InterfaceDiv = document.getElementById("interface");
let originalDOM = document.body.cloneNode(true);


/*function resetDOM() {
    document.body.replaceWith(originalDOM.cloneNode(true))
};*/
function winner(){
    InterfaceDiv.textContent = ""; 
    const newDiv = document.createElement("div"); 
    newDiv.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"; 
    newDiv.style.fontSize = "50px"; 
    newDiv.style.color = "#B95F89";
    newDiv.style.textAlign = "center";
    newDiv.style.paddingTop = "2.5em";

    InterfaceDiv.appendChild(newDiv); 

    if(win> lost){
        console.log("YOU HAVE WON THE GAME!");
        newDiv.textContent = "YOU HAVE WON THE GAME!";
        document.body.style.backgroundColor = "#5ac25d";
            
    } else if(lost > win){
      console.log("YOU HAVE LOST THE GAME!");
      newDiv.textContent = "YOU HAVE LOST THE GAME!";
      document.body.style.backgroundColor = "#c25d5a";
     // document.body.style.color = "blue"; // Changes all text color to blue

      // document.documentElement.style.setProperty("--text-color", "black");
    }else{
        console.log("ITS A TIE!");
       newDiv.textContent = "ITS A TIE!";
    }
};


document.getElementById("choices").addEventListener("click", function(event){
   let elementId = event.target.id;
   const target = event.target;
   if (target.tagName !== "BUTTON") return;
    function getBotChoices(x){
        return (Math.floor(Math.random() * x.length));
    };
    let botResult = getBotChoices(botChoices);
    let botIndex = botChoices[botResult];
    botEndResult = "BOT CHOSE " + botIndex;

    function gamestart(){
        const divsize= "3em";
        bothChoicesDiv.style.fontSize = divsize;
        if(botIndex === elementId){
            bothChoicesDiv.innerText= ` ${botIndex} VS ${elementId}`;
            resultDiv.innerText = "TIE!";
            tie +=1;
        } else if(elementId === "paper" && botIndex === "rock" || elementId === "rock" && botIndex=== "scissors"|| elementId === "scissors" && botIndex === "paper"){
            bothChoicesDiv.innerText= ` ${botIndex.toUpperCase()} VS ${elementId.toUpperCase()}`;
            resultDiv.innerText = "YOU WIN!";
            win +=1;
        } else{
            bothChoicesDiv.innerText= ` ${botIndex} VS ${elementId}`;
            resultDiv.innerText = "YOU LOSE!";
            lost +=1;
        }

    }
    gamestart();
    scoreDiv.innerText = `WINS: ${win} | LOST: ${lost} | TIES: ${tie}`;
});
document.getElementById("end").addEventListener("click", function(){
    winner();
});

document.getElementById("reset").addEventListener("click", function(){
    win = 0;
    lost = 0;
    tie = 0;
    location.reload();

});