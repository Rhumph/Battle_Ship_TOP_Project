const { placeholder } = require("@babel/types");

class Ship {
    constructor(length){ 
        this.length = length;
        this.hitNo = 0;
        this.sunkStatus = false
    }

    beenHit(){ 
        this.hitNo += 1;
        this.isSunk(this.hitNo, this.length);
    }

    isSunk(hitNo, length){ 
        if(hitNo === length){ 
            this.sunkStatus = true
        }
    }
}

class Gameboard {
    constructor(size){ 
        this.board = Array(size).fill(null).map(() => Array(size).fill(null));
        this.miss = [];
        this.hit = [];
        this.shipCoordinates = [];
        this.fleetSunkV = false
    }

    placeShip(coordinates, ship){ 
        const [x, y] = coordinates;
        this.shipCoordinates.push(coordinates)
        this.board[x][y] = ship;
    }

    receiveAttack(attackCoord){ 
        const [x, y] = attackCoord;
        const target = this.board[x][y];
        if(target === null){
            this.miss.push(target)
        }else if(target instanceof Ship){ 
            target.beenHit()
            this.hit.push(target)
        }
    }

    fleetSunkF(){ 
        if(this.shipCoordinates.length === this.hit.length){ 
            this.fleetSunkV = true;
        }
    }

    playerTurn(coordinates){
        this.receiveAttack(coordinates);
        this.fleetSunkF()
    }
}

class Player { 
    constructor(type){ 
        this.type = type;
        this.gameboard = new Gameboard (10)
    }
}

module.exports = { Ship, Gameboard, Player };
