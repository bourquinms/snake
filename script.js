//make board
const newGame = document.getElementById('newGame')
newGame.style.display = 'none'


function makeBoard() {
    for (let i = 0; i < 400; i++) {
        const board = document.getElementById('board')
        const square = document.createElement('square')
        square.id = i
        board.appendChild(square)
    }    
}
makeBoard()
document.getElementById('board').addEventListener("click", function(event) {
    console.log(event.target)
})


