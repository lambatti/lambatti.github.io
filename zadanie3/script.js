tile1 = document.getElementById('tile1');
tile2 = document.getElementById('tile2');
tile3 = document.getElementById('tile3');
tile4 = document.getElementById('tile4');
tile5 = document.getElementById('tile5');
tile6 = document.getElementById('tile6');
tile7 = document.getElementById('tile7');
tile8 = document.getElementById('tile8');
tile9 = document.getElementById('tile9');

const divX = '<p class="tile-X pressed">X</p>'
const divO = '<p class="tile-O pressed">O</p>'

let solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

let moves = 0
let isWon = false

let nextElement = 'O'

tiles = document.querySelectorAll(".tile")

tiles.forEach(tile => {
    tile.addEventListener("click", function (param) {
        addTile(tile)
        addTileToSolution(tile)
        checkResult()
        disableButtonsIfWon()
        changeNextElement()
        tile.disabled = true
    })
})

function addTile(tile) {
    tile.innerHTML = getNextElementDiv()
}

function getNextElementDiv() {
    if (nextElement === 'O') {
        return divO
    } else {
        return divX
    }
}

function addTileToSolution(tile) {

    let numberToInsert = getNumberToInsert(nextElement)

    switch (tile.id) {
        case 'tile1': {
            solution[0][0] = numberToInsert
            break
        }
        case 'tile2': {
            solution[0][1] = numberToInsert
            break
        }
        case 'tile3': {
            solution[0][2] = numberToInsert
            break
        }
        case 'tile4': {
            solution[1][0] = numberToInsert
            break
        }
        case 'tile5': {
            solution[1][1] = numberToInsert
            break
        }
        case 'tile6': {
            solution[1][2] = numberToInsert
            break
        }
        case 'tile7': {
            solution[2][0] = numberToInsert
            break
        }
        case 'tile8': {
            solution[2][1] = numberToInsert
            break
        }
        case 'tile9': {
            solution[2][2] = numberToInsert
            break
        }
    }
    console.log(solution)
}

function getNumberToInsert(element) {
    switch (element) {
        case 'X': {
            return -1
        }
        case 'O': {
            return 1
        }
    }
}

function checkResult() {
    moves++
    if(moves >= 5) {
       for (let i = 0; i <=2; i++) {
           rowSum = solution[i][0] + solution[i][1] + solution[i][2]
           columnSum = solution[0][i] + solution[1][i] + solution[2][i]
           if (rowSum === 3) {
               changeTileStyle(i,0)
               changeTileStyle(i,1)
               changeTileStyle(i,2)
               alert('Wygrał O')
               isWon = true
               return
           } else if (rowSum === -3) {
               changeTileStyle(i,0)
               changeTileStyle(i,1)
               changeTileStyle(i,2)
               alert('Wygrał X')
               isWon = true
               return
           } else if (columnSum === 3) {
               changeTileStyle(0,i)
               changeTileStyle(1,i)
               changeTileStyle(2,i)
               alert('Wygrał O')
               isWon = true
               return
           } else if (columnSum === -3) {
               changeTileStyle(0,i)
               changeTileStyle(1,i)
               changeTileStyle(2,i)
               alert('Wygrał X')
               isWon = true
               return
           }
       }
       diagonalSum1 = solution[0][0] + solution[1][1] + solution[2][2]
       diagonalSum2 = solution[0][2] + solution[1][1] + solution[2][0]
       if (diagonalSum1 === 3) {
           changeTileStyle(0,0)
           changeTileStyle(1,1)
           changeTileStyle(2,2)
           alert('Wygrał O')
           isWon = true
           return
       }
       else if (diagonalSum2 === 3) {
           changeTileStyle(0,2)
           changeTileStyle(1,1)
           changeTileStyle(2,0)
           alert('Wygrał O')
           isWon = true
           return
       }
       else if (diagonalSum1 === -3) {
           changeTileStyle(0,0)
           changeTileStyle(1,1)
           changeTileStyle(2,2)
           alert('Wygrał X')
           isWon = true
           return
       }
       else if (diagonalSum2 === -3) {
           changeTileStyle(0,2)
           changeTileStyle(1,1)
           changeTileStyle(2,0)
           alert('Wygrał X')
           isWon = true
           return
       }
    }
    if(moves === 9) {
        alert('Remis')
    }
}

function changeTileStyle(i,j) {
    let tileToChange;
    if(i === 0 && j === 0) tileToChange = tile1
    else if(i === 0 && j === 1) tileToChange = tile2
    else if(i === 0 && j === 2) tileToChange = tile3
    else if(i === 1 && j === 0) tileToChange = tile4
    else if(i === 1 && j === 1) tileToChange = tile5
    else if(i === 1 && j === 2) tileToChange = tile6
    else if(i === 2 && j === 0) tileToChange = tile7
    else if(i === 2 && j === 1) tileToChange = tile8
    else if(i === 2 && j === 2) tileToChange = tile9
    tileToChange.style.backgroundColor = 'black'
}

function disableButtonsIfWon() {
    if (isWon === true) {
        tiles.forEach(tile => {
            tile.disabled = true
        })
    }
}

function changeNextElement() {
    if (nextElement === 'O') {
        nextElement = 'X'
    } else {
        nextElement = 'O'
    }
}