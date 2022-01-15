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
    console.log(event.target.class)
})

function initialState() {
        snake = {
        snakeBody: [document.getElementById('200').id],
        direction: 1,
        score: 0
    }
}  

let gameState = {
    apple: document.getElementById('208').id,
    snake: snake,
    board: board,
    lastSnake: snake,
    newSnake: snake,
    score: 0
}  

document.getElementById(gameState.apple).className = 'apple'
document.getElementById('up').addEventListener('click', function() {
    if (gameState.snake.direction !== 20) {
        gameState.snake.direction = -20
    }  
})
//addEventListener('')
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
    gameState.lastSnake = gameState.snake.snakeBody[gameState.snake.snakeBody.length - 1]
    //document.getElementById(`${gameState.lastSnake}`).className = 'notSnake'
    gameState.newSnake = +gameState.snake.snakeBody[0] + gameState.snake.direction
    gameState.snake.snakeBody[0] = `${gameState.newSnake}`
    snakeFollow()
    eatApple()
    document.getElementById(gameState.snake.snakeBody[0]).className = 'snakeBody'
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
            document.getElementById(`${apple}`).className = 'apple'
            return
        }
    }
}
function eatApple () {
    if (document.getElementById(gameState.newSnake).className !== 'apple') {
        document.getElementById(`${gameState.lastSnake}`).className = 'notSnake'
    }
    else {
        gameState.snake.snakeBody.push(`${gameState.lastSnake}`)
        makeApple()
        gameState.score ++
        document.getElementById('score').innerText = gameState.score
    }
}    
function snakeFollow() {
   if (gameState.snake.snakeBody.length > 1) 
        for ( i = gameState.snake.snakeBody.length - 1; i > 0; i--) {
        gameState.snake.snakeBody[i] = gameState.snake.snakeBody[i-1]
    }
    else {
        gameState.snake.snakeBody[1] = gameState.snake.snakeBody[0]
    }
}
function snakeCheck() {
    
}

















