import {Game} from "./models/game.js";

class App{

setting = {
    positionCount: 30,
    positionSize: 20
}

    constructor(){
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', (this.setting.positionCount * this.setting.positionSize).toString());
        canvas.setAttribute('height', (this.setting.positionCount * this.setting.positionSize).toString());
        document.getElementById('container').appendChild(canvas);

        const context = canvas.getContext('2d');
    
    new Game(context, this.setting);
    
    }
}

(new App())