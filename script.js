 window.addEventListener('load', function(){
    // canvas setup
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class InputHandler {
        constructor(game) {
            this.game = game;
            // this.player = player;
            window.addEventListener('keydown', e => {
                if((    (e.key === 'ArrowUp') ||
                        (e.key === 'ArrowDown')
                    ) && this.game.keys.indexOf(e.key) === -1){
                        this.game.keys.push(e.key);
                }
                console.log(this.game.keys);
                // console.log(this.player.y);
                // console.log(this.game.height-this.player.height);
            });
            window.addEventListener('keyup', e => {
                if(this.game.keys.indexOf(e.key) > -1){
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1)
                }
                console.log(this.game.keys);
                console.log(this.game.player);
                console.log(this.game.player.y);
                // console.log(this.game.height-this.player.height);
            })
        }

    }
    class Projectile {
        constructor(game, x, y){
            this.game = game;
            this.x = x;
            this.y = y;
            this.width = 10;
            this.height = 3;
            this.speed = 3;
            this.markedForDeletion = false;
        }
        update(){
            this.x += this.speed;
            if (this.x > this.game.width *0.8) this.markedForDeletion = true;
        }
        draw(context){
            context.fillStyle = 'yellow';
            fillRect(this.x, this.y, this.width, this.height);
        }
    }
    class Particle {
        
    }
    class Player {
        constructor(game) {
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
            this.maxSpeed = 3;
        }

        update(){
            if((this.game.keys.includes('ArrowUp')) && (this.game.player.y > 0)) this.speedY = -this.maxSpeed;
            else if ((this.game.keys.includes('ArrowDown')) && (this.game.player.y < (this.game.height - this.game.player.height))) this.speedY = this.maxSpeed;
            else this.speedY = 0;
            this.y += this.speedY;
        }
        draw(context){
            context.fillStyle = 'black';
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    class Enemy {
        
    }
    class Layer {
        
    }
    class Background {
        
    }
    class UI {
        
    }
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.keys = [];
        }
        update(){
            this.player.update();
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    // animation loop
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
 });