const divX = '<p class="tile-X pressed">X</p>'
const divO = '<p class="tile-O pressed">O</p>'

let solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

let moves = 0

let nextElement = 'O'

tiles = document.querySelectorAll(".tile")

tiles.forEach(tile => {
    tile.addEventListener("click", function (param) {
        addTile(tile)
        addTileToSolution(tile)
        checkResult()
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
               alert('Wygrał O')
               return
           } else if (rowSum === -3) {
               alert('Wygrał X')
               return
           } else if (columnSum === 3) {
               alert('Wygrał O')
               return
           } else if (columnSum === -3) {
               alert('Wygrał X')
               return
           }
       }
       diagonalSum1 = solution[0][0] + solution[1][1] + solution[2][2]
       diagonalSum2 = solution[0][2] + solution[1][1] + solution[2][0]
       if (diagonalSum1 === 3 || diagonalSum2 === 3) {
           alert('Wygrał O')
           return
       } else if (diagonalSum1 === -3 || diagonalSum2 === -3) {
           alert('Wygrał X')
           return
       }
    }
    if(moves === 9) {
        alert('Remis')
    }
}

function changeNextElement() {
    if (nextElement === 'O') {
        nextElement = 'X'
    } else {
        nextElement = 'O'
    }
}