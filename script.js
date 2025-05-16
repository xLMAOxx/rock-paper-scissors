let win = 0;
let lost = 0;
let tie = 0;
const botChoices = ["rock", "paper", "scissors"];
const bothChoicesDiv = document.getElementById("bothChoices");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const gameResultDiv = document.getElementById("gameResult");
const InterfaceDiv = document.getElementById("interface");


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
        if(botIndex === elementId){
            bothChoicesDiv.innerText= `Bot chose ${botIndex} and you chose ${elementId}`;
            resultDiv.innerText = "TIE!";
            return tie +=1;
        } else if(elementId === "rock" && botIndex === "paper" || elementId === "paper" && botIndex=== "rock"|| elementId === "scissors" && botIndex === "paper"){
            bothChoicesDiv.innerText= `BOT CHOSE ${botIndex.toUpperCase()} AND YOU CHOSE ${elementId.toUpperCase()}`;
            resultDiv.innerText = "YOU WIN!";
            return win +=1;
        } else{
            bothChoicesDiv.innerText= `Bot chose ${botIndex} and you chose ${elementId}`;
            resultDiv.innerText = "YOU LOSE!";
            return lost +=1;
        }

    }
    gamestart();
    scoreDiv.innerText = `WINS: ${win} | LOST: ${lost} | TIES: ${tie}`;
});

    function winner(){
        /*InterfaceDiv.textContent = ""; // Clears everything
        InterfaceDiv.appendChild(document.createElement("div")); // Adds new content*/

        if(win> lost){
            console.log("YOU HAVE WON THE GAME!");
            //gameResultDiv.innerText = "YOU HAVE WON THE GAME!";
            
        } else if(lost > win){
            console.log("YOU HAVE LOST THE GAME!");
            //gameResultDiv.innerText = "YOU HAVE LOST THE GAME!";
        }else{
            console.log("ITS A TIE!");
           // gameResultDiv.innerText = "ITS A TIE!";
        }
    };
document.getElementById("end").addEventListener("click", function(){
winner();
});