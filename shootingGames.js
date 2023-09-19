// SOAL KEDUA : 
class Player {
    constructor(_name) {
        this.name = _name
        this.health = 100;
        this.power = 10;
    }

    showStatus = () => {
        return `Player ${this.name} [Health = ${this.health} || Power = ${this.power}]`
    }

    hit = (power) => {
      this.health -= power;
    }

    useItem = (item) => {
        if (item == 0) {
            return this.health += Math.round(Math.random()) * 10;
        } else {
            return this.power += Math.round(Math.random()) * 10;
        }
    }

};


class ShootingGame {
    constructor(_player1, _player2) {
        this.player1 = _player1;
        this.player2 = _player2;
        console.log(this.player1);
    }

    getRandomItem = () => {
        return Math.round(Math.random())
    }

    start = () => {
        let shoot = "";
        while (true) {
            // show status
            shoot += `BEFORE --> \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
            // random item
            this.player1.useItem(this.getRandomItem());
            this.player2.useItem(this.getRandomItem());
            shoot += `AFTER -- > \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());
            // hit
            this.player1.hit(this.player2.power);
            this.player2.hit(this.player1.power);
            shoot += `HIT -- > \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
            if (this.player1.health <= 0) {
                return shoot += `${this.player2.name} WIN`
            } else if (this.player2.health <= 0) {
                return shoot += `${this.player1.name} WIN`
            }
        }
    }
};


let player1 = new Player("Jamal");
let player2 = new Player("Harun");
let shooting = new ShootingGame(player1, player2);
console.log(shooting.start());