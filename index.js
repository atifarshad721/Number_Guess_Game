
const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let result = true;

function resetGame() {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;
    document.getElementById("mySpan").textContent = "0";
    document.getElementById("result").textContent = "";
    document.getElementById("guess").value = "";
}

function execute(){
    
    let guess = document.getElementById("guess").value;
    guess = Number(guess);

    document.getElementById('guess').value = '';

    if(isNaN(guess)){
        document.getElementById("result").textContent = "Enter a Valid Integer.";
    }else if(guess < 1 || guess > 100){
        document.getElementById("result").textContent = "Enter a Valid Integer.";
    }else{

        attempts++;
        document.getElementById("mySpan").textContent = `${attempts}`;

        if(guess < answer){
            document.getElementById("result").textContent = "TOO LOW GUESS!";
        }else if(guess > answer){
            document.getElementById("result").textContent = "TOO HIGH GUESS!";
        }else{
            document.getElementById("result").textContent = "Correct GUESS! You WON.";
        }
    
    }
    
}
