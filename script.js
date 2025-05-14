let win = 0;
let lost = 0;
let tie = 0;
const botChoices = ["ROCK", "PAPER", "SCISSORS"];


document.getElementById("choices").addEventListener("click", function(event){
   let elementId = event.target.id;
    function getBotChoices(x){
        return (Math.floor(Math.random() * x.length));
    };
    let botResult = getBotChoices(botChoices);
    let botIndex = botChoices[botResult];
    botEndResult = "BOT CHOSE " + botIndex;

    function gamestart(){
        if(botResult == 0 && elementId==="rock"){
            console.log(botEndResult + " AND YOU CHOSE ROCK!");
            console.log("TIE!");
            return tie +=1;
    
        } else if (botResult == 0 && elementId==="paper"){
            console.log(botEndResult + " AND YOU CHOSE PAPER!");
            console.log("YOU WIN!");
            return win += 1;
    
        } else if(botResult == 0 && "scissors"===elementId){
            console.log(botEndResult + " AND YOU CHOSE SCISSORS!");
            console.log("YOU LOST!");
            return lost +=1;

        } else if(botResult == 1 && "rock"===elementId){
            console.log(botEndResult + " and you chose rock!");
            console.log("YOU LOST");
            return lost +=1;
    
        }else if (botResult == 1 && "paper"===elementId){
            console.log(botEndResult + " and you chose paper!");
            console.log("TIE!");
            return tie +=1;
    
        } else if (botResult == 1 && "scissors"===elementId){
            console.log(botEndResult + " AND YOU CHOSE SCISSORS!");
            console.log("YOU WIN!");
            return win +=1;
    
        }else if (botResult == 2 && "rock"===elementId){
            console.log(botEndResult + " AND YOU CHOSE ROCK!");
            console.log("YOU WIN!");
            return win +=1;
    
        }else if(botResult == 2 && "paper"===elementId){
            console.log("bot chose " + botIndex + " and you chose paper");
            console.log("YOU LOST!");
            return lost +=1;
    
        }else if(botResult == 2 && "scissors"===elementId){
            console.log("bot choice " + botIndex + " and you chose scissors");
            console.log("TIE!");
            return tie +=1;
        }}
        gamestart();
});

document.getElementById("end").addEventListener("click", function(){

    function winner(){
        if(win>= lost){
            console.log("YOU HAVE WON THE GAME!");
        } else {
            console.log("you have lost the game");
        }
    }
    winner(),
    console.log("WINS: " + win);
    console.log("LOSTS: " + lost);
    console.log ("TIES: " + tie)
});