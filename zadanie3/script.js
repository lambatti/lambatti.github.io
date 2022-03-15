// const tile1 = document.getElementById("tile1")
// const tile2 = document.getElementById("tile2")
// const tile3 = document.getElementById("tile3")
// const tile4 = document.getElementById("tile4")
// const tile5 = document.getElementById("tile5")
// const tile6 = document.getElementById("tile6")
// const tile7 = document.getElementById("tile7")
// const tile8 = document.getElementById("tile8")
// const tile9 = document.getElementById("tile9")

let nextElement = 'O'

function changeNextElement() {
    if (nextElement === 'O') {
        nextElement = 'X'
    } else {
        nextElement = 'O'
    }
}

solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

tiles = document.querySelectorAll(".tile")

tiles.forEach(tile => {
    tile.addEventListener("click", function (param) {
        addTile(tile)
        addTileToSolution(tile)
        console.log(solution)
        checkResult()
        changeNextElement()
        // usuń eventlistener po kliknięciu
    })
})

function addTileToSolution(tile) {
    switch (tile.id) {
        case 'tile1': {
            solution[0][0] = nextElement
            break
        }
        case 'tile2': {
            solution[0][1] = nextElement
            break
        }
        case 'tile3': {
            solution[0][2] = nextElement
            break
        }
        case 'tile4': {
            solution[1][0] = nextElement
            break
        }
        case 'tile5': {
            solution[1][1] = nextElement
            break
        }
        case 'tile6': {
            solution[1][2] = nextElement
            break
        }
        case 'tile7': {
            solution[2][0] = nextElement
            break
        }
        case 'tile8': {
            solution[2][1] = nextElement
            break
        }
        case 'tile9': {
            solution[2][2] = nextElement
            break
        }
    }
}

const X = '<p class="tile-X">X</p>'
const O = '<p class="tile-O">O</p>'

function getNextElement() {
    if (nextElement === 'O') {
        return O
    } else {
        return X
    }
}

function addTile(tile) {

    console.log(tile.innerHTML)
    // sprawdź, czy kliknięte pole nie jest już wypełnione
    if (tile.innerHTML === '') {
        tile.innerHTML = getNextElement()
    }

    // jeżeli nie, to dodaj X lub O i uzupełnij macierz rozwiązań


}

function checkResult() {
    // sprawdź, czy wygrana
}