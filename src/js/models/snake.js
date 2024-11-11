export class Snake {

    snake = [
        {x: 10, y: 20},
    ]
    currentDirection = 'right';

    constructor(context, positionsCount, positionsSize) {
        this.positionsSize = positionsSize;
        this.context = context;
        this.positionsCount = positionsCount;
        this.addHandler();
    }

    addHandler(){
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && this.currentDirection !== 'right') {
                this.currentDirection = 'left';
            } else if (e.key === 'ArrowRight' && this.currentDirection !== 'left') {
                this.currentDirection = 'right';
            } else if (e.key === 'ArrowUp' && this.currentDirection !== 'down') {
                this.currentDirection = 'up';
            } else if (e.key === 'ArrowDown' && this.currentDirection !== 'up') {
                this.currentDirection = 'down';
            }
        })
    }

    showSnake() {

        for (let i = 0; i < this.snake.length; i++) {
            this.context.fillStyle = 'black';
            this.context.beginPath();
            this.context.fillRect(this.snake[i].x * this.positionsSize - this.positionsSize,
                this.snake[i].y * this.positionsSize - this.positionsSize,
                    this.positionsSize, this.positionsSize);
        }
        let newHeadPosition = {
            x: this.snake[0].x,
            y: this.snake[0].y
        };

        this.snake.pop();

        if (this.currentDirection === 'left') {
            if(newHeadPosition.x === 1){
               newHeadPosition.x = this.positionsCount;
            } else
            newHeadPosition.x -= 1;
        } else if (this.currentDirection === 'right') {
            if(newHeadPosition.x === this.positionsCount) {
                newHeadPosition.x = 1;
            } else
            newHeadPosition.x += 1;
        } else if (this.currentDirection === 'up') {
                if(newHeadPosition.y === 1){
                    newHeadPosition.y = this.positionsCount;
            } else
            newHeadPosition.y -= 1;
        } else if (this.currentDirection === 'down') {
                if(newHeadPosition.y === this.positionsCount){
                    newHeadPosition.y = 1;
            } else
            newHeadPosition.y += 1;
        }

        this.snake.unshift(newHeadPosition);
    }
}