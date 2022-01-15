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
    apple: document.getElementById('208').id,
    snake: snake,
    board: board,
    lastSnake: snake,
    newSnake: snake
}  

document.getElementById(gameState.apple).className = 'apple'
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
    gameState.lastSnake = gameState.snake.snakeBody[0]
    //document.getElementById(`${gameState.lastSnake}`).className = 'notSnake'
    gameState.newSnake = +gameState.snake.snakeBody[gameState.snake.snakeBody.length - 1] + gameState.snake.direction
    gameState.snake.snakeBody[gameState.snake.snakeBody.length - 1] = `${gameState.newSnake}`
    eatApple()
    document.getElementById(gameState.snake.snakeBody[gameState.snake.snakeBody.length - 1]).className = 'snakeBody'
}


setInterval(function() {snakeMove();
  }, 300);
function math () {
    return Math.floor(Math.random() * 400)
}
function makeApple () {
    let apple = math();
    for (i = 0; i < gameState.snake.snakeBody.length; i++) {
        if (+gameState.snake.snakeBody[i] !== apple) {
            gameState.apple = document.getElementById(`${apple}`)
            console.log(gameState.apple)
            document.getElementById(`${apple}`).className = 'apple'
            return
        }
        else makeApple()
    }
}
function eatApple () {
    if (document.getElementById(gameState.newSnake).className !== 'apple') {
        document.getElementById(`${gameState.lastSnake}`).className = 'notSnake'
        }
    else {
        //gameState.snake.snakeBody.push(`${gameState.lastSnake} `)
        makeApple()
        console.log(gameState.snake.snakeBody)
    }
}    
function snakeCheck() {
    
}


















