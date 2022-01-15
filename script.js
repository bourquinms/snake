//make board
const newGame = document.getElementById('newGame')
newGame.style.display = 'none'
function makeBoard() {
    for (let i = 0; i < 400; i++) {
        const board = document.getElementById('board')
        const square = document.createElement('square')
        square.id = i
        square.class = "notSnake"
        board.appendChild(square)
    }    
}
makeBoard()

let snake = {
    snakeBody: [document.getElementById('200').id],
    direction: 1
}
document.getElementById('board').addEventListener("click", function(event) {
    console.log(event.target.id)
})

function initialState() {
        snake = {
        snakeBody: [document.getElementById('200').id],
        direction: 1
    }
}  

let gameState = {
    apple: [document.getElementById('208').id],
    snake: snake
}  

document.getElementById(gameState.apple[0]).className = 'apple'
document.getElementById('up').addEventListener('click', function() {
    if (gameState.snake.direction !== 20) {
        gameState.snake.direction = -20
    }  
})
document.getElementById('down').addEventListener('click', function() {
    if (gameState.snake.direction !== -20) {
        gameState.snake.direction = 20
    }  
})
document.getElementById('left').addEventListener('click', function() {
    if (gameState.snake.direction !== 1) {
        gameState.snake.direction = -1
    }    
})
document.getElementById('right').addEventListener('click', function() {
    if (gameState.snake.direction !== -1) {
        gameState.snake.direction = 1
    }  
})        

function snakeMove() {
    let lastSnake = gameState.snake.snakeBody[0]
    document.getElementById(`${lastSnake}`).className = 'notSnake'
    newSnake = +gameState.snake.snakeBody[gameState.snake.snakeBody.length - 1] + gameState.snake.direction
    gameState.snake.snakeBody[gameState.snake.snakeBody.length - 1] = `${newSnake}`
    document.getElementById(gameState.snake.snakeBody).className = 'snakeBody'
    console.log(gameState.snake.snakeBody)
    console.log(newSnake)
}

//unction eatApple() {
//    if (newSnake)
//}
setInterval(function() {snakeMove();
  }, 300);
function math () {
    return Math.floor(Math.random() * 400)
}
function makeApple () {
    let apple = math()
    for ( i = 0, i < gameState.snake.snakeBody.length, i++) {
        
    }
}
function snakeCheck() {
    
}



















