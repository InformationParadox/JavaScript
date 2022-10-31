const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");
const winningMessageDisplay = document.getElementById("winning-msg");
const winningMessageText = document.getElementById("displaymsg");
const restatBtn = document.getElementById("restartBtn");

const X_CLASS = "x";
const CIRCLE_CLASS ="circle";
let circleTurn = "" ; //undefined halema 0 first
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

startGame();

restatBtn.addEventListener("click", startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        //reset everthing after the restart button is clicked
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);    
        cell.removeEventListener("click", handleClick);

        // ekchtoti kunai cell click bhaisakesi tyo cell feri click garda value return garda
        // only once the click event is fired for a cell
        cell.addEventListener('click', handleClick, {once : true});
    });

    setBoardHover();
    winningMessageDisplay.classList.remove('show');
}

function handleClick(e) {
    // console.log("clicked");

    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    // console.log(currentClass)
    //placeMark
    placeMark(cell, currentClass);

    //check for win
    if (checkWin(currentClass)) {
        // console.log("winner");
        endGame(false); //no draw case
    }
     else if (checkDraw()) {
         endGame(true);
     }
     else {
        // Switch Truns
        swapTurns();
        setBoardHover();
     }
    

    // Check for Draw
    function endGame(draw) {
        if(draw) {
            winningMessageText.innerHTML = `DRAW!!`;
        }
        else {
            winningMessageText.innerHTML = `
            ${circleTurn ? "O's" : "X's"} Wins!`;
        }

        winningMessageDisplay.classList.add('show');
    }

 
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHover() {

    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);

    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    }
    else {
        board.classList.add(X_CLASS);
    }
}

function checkWin ( currentClass) {
    // .some returns true if any of the comb is true
    return WINNING_COMBINATIONS.some(combination => {
       return combination.every(index => { //harek cell ko lagi check
           return cellElements[index].classList.contains(currentClass); // same class xa ki nai check
        });
    });
}

function checkDraw() {
   return [...cellElements].every ( cell => {   //destructring of array
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS);
    })
}