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
            console.log('I is Sunk')
            this.sunkStatus = true
        }
    }
}

class Gameboard {

}

module.exports = { Ship };