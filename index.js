const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const result = document.getElementById("result");
let Cchoice;
let Pscore,Cscore;

function playerChoice(Pchoice) {
    let choice = [`rock`, `paper`, `scissors`]
    

    Cchoice = choice[(Math.floor(Math.random() * 3))]

    playerDisplay.textContent = `Player:${Pchoice}`;
    computerDisplay.textContent = `Computer:${Cchoice}`;

    console.log(Cchoice)
    result.classList.remove("red", "green");


    if (Pchoice === Cchoice) {
        result.textContent = "It's A Tie"

    }

    else {
        switch (Pchoice) {
            case "rock":
                result.textContent = (Cchoice === "paper") ? `You Lose` : `You Win`;
                break;

            case "paper":
                result.textContent = (Cchoice === "scissors") ? `You Lose` : `You Win`;
                break;

            case "scissors":
                result.textContent = (Cchoice === "rock") ? `You Lose` : `You Win`;
                break;
        }

        if(result.textContent === `You Lose`){
            result.classList.add("red");
        }
        else{
            result.classList.add("green")
        }
    }
}