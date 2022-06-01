function ticTac(moves) {
    let boardState = [
        [false, false, false],
        [false, false, false],
        [false, false, false]]
    let isXplayerTurn = true;
    let squaresMarked=0;
    for (let index = 0; index < moves.length; index++) {
        let [firstIndex, secondIndex] = moves[index].split(" ");
        //if its the X player Turn
        if (isXplayerTurn == true) {
            //if the 
            if (boardState[firstIndex][secondIndex] == false) {
                boardState[firstIndex][secondIndex] = "X";
                squaresMarked++;
                isXplayerTurn = false;
            } else if (boardState[firstIndex][secondIndex] == "X" || boardState[firstIndex][secondIndex] == "O") {
                console.log("This place is already taken. Please choose another!")
            }
        } else { //if its the O player turn
            if (boardState[firstIndex][secondIndex] == false) {
                boardState[firstIndex][secondIndex] = "O";
                squaresMarked++;
                isXplayerTurn = true;
            } else if (boardState[firstIndex][secondIndex] == "X" || boardState[firstIndex][secondIndex] == "O") {
                console.log("This place is already taken. Please choose another!")
            }
        }

        if (squaresMarked > 2) {
            let winCondition1=winInRow(boardState);
            let winCondition2=winInColumn(boardState);
            let winCondition3=winInDiagonal(boardState);
            if (winCondition1=="X"||winCondition1=="O") {
                console.log(`Player ${winCondition1} wins!`);
                break;
            }
            if (winCondition2=="X"||winCondition2=="O") {
                console.log(`Player ${winCondition2} wins!`);
                break;
            }
            if (winCondition3=="X"||winCondition3=="O") {
                console.log(`Player ${winCondition3} wins!`);
                break;
            }
            if (winCondition1=="No"&&winCondition2=="No"&&winCondition3=="No"&&squaresMarked>8) {
                console.log(`The game ended! Nobody wins :(`)
                break;
            }
        }
    }

    function winInRow(board) {
        let win=true;
        let winner="No"
        for (let index = 0; index < 3; index++) {
            let currentFirstRowElement=board[index][0];
            for (let j = 0; j < 3; j++) {
                if (board[index][j]!==currentFirstRowElement&&currentFirstRowElement!=false) {
                    win=false;
                }
            }
            if (win) {
                winner=currentFirstRowElement;
                break;
            } 
        }
        return winner;
    }

     function winInColumn(board) {
        let win=true;
        let winner="No"
        for (let index = 0; index < 3; index++) {
            let currentFirstColumnElement=board[0][index];
            for (let j = 0; j < 3; j++) {
                if (board[j][index]!==currentFirstColumnElement&&currentFirstColumnElement!=false) {
                    win=false;
                }
            }
            if (win) {
                winner=currentFirstColumnElement;
                break;
            } 
        }
        return winner;
    }

    function winInDiagonal(board) {
        let winFirst=true;
        let winSecond=true;
        let winner="No"
        let firstDiagonalFirstElement=board[0][0];
        let secondDiagonalFirstElement=board[2][0];
        for (let i = 0; i < board.length; i++) {
            if (board[i][i]!==firstDiagonalFirstElement&&firstDiagonalFirstElement!=false) {
                winFirst=false;
            }
            if (board[board.length-1-i][i]!==secondDiagonalFirstElement&&secondDiagonalFirstElement!=false) {
                winSecond=false;
            }
        }
        if (winFirst) {
            winner=firstDiagonalFirstElement;
        } 
        if (winSecond) {
            winner=secondDiagonalFirstElement;
        }
        return winner;
    }   
 



    for (let i = 0; i < boardState.length; i++) {
        console.log(boardState[i].join("	"))
    }

}

 ticTac([
    "0 1",
    "0 0",
    "0 0",
    "0 0",
    "0 0",
    "0 0",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
); 
ticTac([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);
ticTac([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);
