class GameObject extends createjs.Container {
    constructor(graphic) {
        super();

        if (graphic !== undefined) {
            this.graphic = graphic;
            this.addChild(this.graphic);

            var b = this.graphic.nominalBounds;
            this.setBounds(b.x, b.y, b.width, b.height);
        }
    }
}

class MovableGameObject extends GameObject {
    constructor(graphic) {
        super(graphic);

        this.on("tick", this.tick);
    }
    tick() {

    }

}


class Hero extends MovableGameObject {
    constructor() {
        super( new lib.hero() );
    }
    moveRight(posX,posY){
        // this.x += 100
        createjs.Tween.get(this,{override:true}).to({x:posX+100}, 1200, createjs.Ease.quintOut)
    }
    moveLeft(posX,posY){
        // this.x -= 100
        createjs.Tween.get(this,{override:true}).to({x:posX-100}, 1200, createjs.Ease.quintOut)
    }
    moveTop(posX,posY){
        // this.y -= 100
        createjs.Tween.get(this,{override:true}).to({y:posY-100}, 1200, createjs.Ease.quintOut)
    }
    moveBottom(posX,posY){
        // this.y += 100
        createjs.Tween.get(this,{override:true}).to({y:posY+100}, 1200, createjs.Ease.quintOut)
    }
}

class Block extends MovableGameObject {
    constructor() {
        super( new lib.block() );
    }
}



class Game{
    constructor() {

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        createjs.Ticker.setFPS(60);

        // //키보드 처리 로직
        // window.addEventListener('keydown', function(event) {
        //     console.log(this);
        // }.bind(this));

        // keep re-drawing the stage.
        this.restartGame();
        createjs.Ticker.on("tick", this.stage);

    }

    restartGame() {
        this.stage.removeAllChildren();

        // background
        this.stage.addChild(new lib.bg());

        this.world = new World();
        this.stage.addChild(this.world);
    }
}

class World extends createjs.Container {
    constructor() {
        super();

        this.on("tick", this.tick);
        this.addHero();
        this.addBlock();
        //this.hero.moveRight();
        //키보드 처리 로직
        window.addEventListener('keydown', function(event) {
            // this.hero.moveRight();
                var code = event.keyCode;
                switch (code) {
                         case 37: this.hero.moveLeft(this.hero.x,this.hero.y); break; //Left key
                         case 38: this.hero.moveTop(this.hero.x,this.hero.y); break; //Up key
                         case 39: this.hero.moveRight(this.hero.x,this.hero.y); break; //Right key
                         case 40: this.hero.moveBottom(this.hero.x,this.hero.y); break; //Down key
                        // default: alert(code); //Everything else
                }
        }.bind(this));
    }

     tick(){
         var pt = this.hero.localToLocal(0,0,this.block);
         if (this.block.hitTest(pt.x, pt.y)) {console.log("targetted")}
     }

     addHero() {
         var hero = new Hero();
         this.addChild(hero);
         hero.x = 50;
         hero.y = 250;
         this.hero = hero;
     }

     addBlock(){
         var block = new Block();
         this.addChild(block);
         block.x = 400;
         block.y = 400;
         this.block = block;
     }
}
// start the game
var game = new Game();
