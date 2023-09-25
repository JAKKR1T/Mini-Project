const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const choiceBtn = document.querySelector(".choiceBtn");
const choiceBtn2 = document.querySelector(".choiceBtn2");
const choiceBtn3 = document.querySelector(".choiceBtn3");
const textPlayer1 = document.querySelector(".textPlayer1");
const textPlayer2 = document.querySelector(".textPlayer2");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", "" ];
let currentPlayer = 'Player 1';
let running = false;
let a = 0;
let b = 0;
let player1 = 'X'
let player2 ='O'
let size;
let counterplayer1A = 0;
let counterplayer1B = 0;
let counterplayer1C = 0;
let counterplayer2A = 0;
let counterplayer2B = 0;
let counterplayer2C = 0;
startgame();

function startgame(){
    
    if(currentPlayer == "Player 1"){

    
        choiceBtn.addEventListener('click',() => koko1());
    choiceBtn2.addEventListener('click',() => koko2());
    choiceBtn3.addEventListener('click',() => koko3());
     
  
}
/*if(currentPlayer == "Player 2"){
    choiceBtn.addEventListener('click',() => {
        choiceBtn.style.backgroundColor = '#7CFC00';
        choiceBtn.style.transition = '.3s ease';
        currentPlayer;
        choiceBtn2.style.backgroundColor = '#f0f8ff';
        choiceBtn3.style.backgroundColor = '#f0f8ff';
        a = 1;
        size = 'O'
        console.log("hello");
    });
    
    choiceBtn2.addEventListener('click',() => {
        
        choiceBtn2.style.backgroundColor = '#7CFC00';
        choiceBtn2.style.transition = '.3s ease';
        currentPlayer; 
        choiceBtn.style.backgroundColor = '#f0f8ff';
        choiceBtn3.style.backgroundColor = '#f0f8ff';
        a = 2;
        size ='O'
    });
    choiceBtn3.addEventListener('click',() => {
        
        choiceBtn3.style.backgroundColor = '#7CFC00';
        choiceBtn3.style.transition = '.3s ease';
        currentPlayer; 
        choiceBtn.style.backgroundColor = '#f0f8ff';
        choiceBtn2.style.backgroundColor = '#f0f8ff';
        a = 3;
        size = 'O'
    });*/

    
    cells.forEach(cell => cell.addEventListener("click", cilckcell));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}


function cilckcell(){
    const cellIndex = this.getAttribute("cellIndex")
    if(options[cellIndex] !="" || !running){
        return;
    }
    if(a == 0){//ห้ามเปลื่ยน เป็น ตัวที่ทำให้ที่ว่างวางไม่ได้ได้ไงไม่รู้
        cell.textContent = "p";//ห้ามเปลื่ยน แล้วมันไม่ขึ้นได้ไงก่อน
        }//ห้ามเปลื่ยน
    updateCell(this, cellIndex);
    a = 0; //ห้ามเปลื่ยน
    checkWinner();
    //changePlayer(); //พอเปลื่ยนได้

}
function updateCell(cell, index)  {  
    //options[index] = size;
    {
        if(currentPlayer == "Player 1")
        {
            if(counterplayer2A >= 2){
                choiceBtn.style.backgroundColor = '#FF0000'
                console.log("hello")
                choiceBtn.disabled = true;
            }
            if((counterplayer2A < 2) && (counterplayer1A >= 2))
            {
                choiceBtn.disabled = false;
                choiceBtn.style.backgroundColor = '#f0f8ff';
            }
            if(counterplayer2B >= 2){
                choiceBtn2.style.backgroundColor = '#FF0000'
                console.log("hello")
                choiceBtn2.disabled = true;
            }
            
            if((counterplayer2B < 2)&&(counterplayer1B >= 2)){
                choiceBtn2.disabled = false;
            }
            if(counterplayer2C >= 2){
                choiceBtn3.style.backgroundColor = '#FF0000'
                console.log("hello")
                choiceBtn3.disabled = true;
            }
            if((counterplayer2C < 2) && (counterplayer1C >= 2)){
                choiceBtn3.disabled = false;
                choiceBtn3.style.backgroundColor = '#f0f8ff' 
            }

            
            if(a == 1) {
            cell.textContent = "1";
            if(counterplayer1A < 2){
                choiceBtn.style.backgroundColor = '#f0f8ff';}
            counterplayer1A += 1

        }
           if(a == 2) {
            cell.textContent = "2";
            if(counterplayer1B < 2){
            choiceBtn2.style.backgroundColor = '#f0f8ff';}
            counterplayer1B += 1

        }
           if(a == 3) {
            cell.textContent = "3";
            if(counterplayer1C < 2){
            choiceBtn3.style.backgroundColor = '#f0f8ff'}
            counterplayer1C += 1
            options[index] = size;

        }
           if(a == 0){//ห้ามเปลื่ยน
            cell.textContent = "";//ห้ามเปลื่ยน
            }//ห้ามเปลื่ยน
        }
    
        
        if(currentPlayer == "Player 2")

        {

            if(counterplayer1A >= 2){
                choiceBtn.style.backgroundColor = '#FF0000'
                console.log("helloD")
                choiceBtn.disabled = true;
            }
            if((counterplayer1A < 2)&&(counterplayer2A >= 2)){
                choiceBtn.disabled = false;
                choiceBtn.style.backgroundColor = '#f0f8ff'
            }
            if(counterplayer1B >= 2){
                choiceBtn2.style.backgroundColor = '#FF0000'
                console.log("helloE")
                choiceBtn2.disabled = true;
            }
            if((counterplayer1B < 2)&&(counterplayer2B >= 2)){
                choiceBtn2.disabled = false;
                choiceBtn2.style.backgroundColor = '#f0f8ff'
            }
            if(counterplayer1C >= 2){
                choiceBtn3.style.backgroundColor = '#FF0000'
                console.log("helloF")
                choiceBtn3.disabled = true;
            }
            if((counterplayer1C < 2)&&(counterplayer2C >= 2)){
                choiceBtn3.disabled = false;
                choiceBtn3.style.backgroundColor = '#f0f8ff'
            }


            if(a == 1) {
            cell.textContent = "A";
            if(counterplayer2A < 2){
            choiceBtn.style.backgroundColor = '#f0f8ff';}
            counterplayer2A += 1

            }
           if(a == 2) {
            cell.textContent = "B";
            if(counterplayer2B < 2){
            choiceBtn2.style.backgroundColor = '#f0f8ff';}
            counterplayer2B += 1
            
            }
           if(a == 3) {
            cell.textContent = "C";
            if(counterplayer2C < 2){
            choiceBtn3.style.backgroundColor = '#f0f8ff'}
            counterplayer2C += 1
            options[index] = size;
            }
           if(a == 0){//ห้ามเปลื่ยน
            cell.textContent = "";//ห้ามเปลื่ยน
            }//ห้ามเปลื่ยน
        
        }

    }
}

function restartGame(){
    currentPlayer = "Player 1";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
    counterplayer1A = 0;
    counterplayer1B = 0;
    counterplayer1C = 0;
    counterplayer2A = 0;
    counterplayer2B = 0;
    counterplayer2C = 0;
    choiceBtn.style.backgroundColor = '#f0f8ff'
    choiceBtn2.style.backgroundColor = '#f0f8ff'
    choiceBtn3.style.backgroundColor = '#f0f8ff'
    choiceBtn.disabled = false;
    choiceBtn2.disabled = false;
    choiceBtn3.disabled = false;
} 
function changePlayer(){
    currentPlayer = (currentPlayer == "Player 1") ? "Player 2" : "Player 1";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function empty(){
    if (b == 0){
        cell.textContent = "";

    }
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }

    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

    function koko1()
{
    choiceBtn.style.backgroundColor = '#7CFC00';
    choiceBtn.style.transition = '.3s ease';
    currentPlayer;
    if(currentPlayer == "Player 1"){
    
        if(counterplayer1B < 2){
            choiceBtn2.style.backgroundColor = '#f0f8ff';}
        if(counterplayer1C < 2){
            choiceBtn3.style.backgroundColor = '#f0f8ff';}
    }
    a = 1;
    size = 'AS'
    if(currentPlayer == "Player 2"){
        size = 'O'
        if(counterplayer2B < 2){
            choiceBtn2.style.backgroundColor = '#f0f8ff';
        }
        if(counterplayer2C){
            choiceBtn3.style.backgroundColor = '#f0f8ff';
        }
    }
    /*
    if(currentPlayer == "Player 1"){
        if(counterplayer1A > 2){
            cells.forEach(cell => cell.removeEventListener("click", cilckcell));
        }
        if(counterplayer1A < 2){
            cells.forEach(cell => cell.addEventListener("click", cilckcell));
        }
    }

*/

}
function koko2()
{
        choiceBtn2.style.backgroundColor = '#7CFC00';
    choiceBtn2.style.transition = '.3s ease';
    currentPlayer; 
    if(currentPlayer == "Player 1"){
        if(counterplayer1A < 2){
        choiceBtn.style.backgroundColor = '#f0f8ff';}
        if(counterplayer1C < 2){
        choiceBtn3.style.backgroundColor = '#f0f8ff';}
}
    a = 2;
    size ='AS'
    if(currentPlayer == "Player 2"){
        size = 'O'
        
        if(counterplayer2A < 2){
            choiceBtn.style.backgroundColor = '#f0f8ff';}
        if(counterplayer2C < 2){
            choiceBtn2.style.backgroundColor = '#f0f8ff';}
    }
}
function koko3()
{
    choiceBtn3.style.backgroundColor = '#7CFC00';
    choiceBtn3.style.transition = '.3s ease';
    currentPlayer; 
    if(currentPlayer == "Player 1"){
    if(counterplayer1A < 2){
    choiceBtn.style.backgroundColor = '#f0f8ff';}
    if(counterplayer1B < 2){
    choiceBtn2.style.backgroundColor = '#f0f8ff';}
    }
    a = 3;
    size = 'AS'
    if(currentPlayer == "Player 2"){
        size = 'O'
        if(counterplayer2A < 2){
            choiceBtn.style.backgroundColor = '#f0f8ff';}
        if(counterplayer2B < 2){
            choiceBtn2.style.backgroundColor = '#f0f8ff';}
    }
}