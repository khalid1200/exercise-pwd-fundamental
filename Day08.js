// SOAL PERTAMA:
class Employee {
    constructor(_name, _age, _email, _job) {
        this.name = _name;
        this.age = _age;
        this.email = _email;
        this.job = _job;
    }
}
console.log(new Employee("Abdi", 27, "abdi@mail.com", "Coder"));

// menggunakan extends, agar properti pada class Employee dapat diakses juga  
class FullTime extends Employee {
    #salary = {
        typeA: 100000,
        typeB: 75000,
    };
    
    #attendance = [];
    // properti untuk menyimpan berapa lama pekerja bekerja. dalam bentuk ARRAY karena data dikumpulkan secara kolektif seperti per bulan. 
    constructor(_name, _age, _email, _job) {
        super(_name, _age, _email, _job)
    }

    addAttendance = (clock_in, clock_out) => {
        console.log(clock_in);
        console.log(clock_in.split(":")[0]);
        console.log(clock_out);
        console.log(parseInt(clock_out.slice(0, 2)));

        let data = {
            in: clock_in,
            out: clock_out,
            // bagusnya menggunakan split karena index menit masih bisa digunakan nantinya.
            dailyHours: parseInt(clock_out.split(":")[0]) - parseInt(clock_in.split(":")[0]),
        };

        let overtime = data.dailyHours - 6;
        console.log(data.dailyHours);
        console.log(overtime);
        if (overtime > 0) {
            //penggunaan titik setelah nama variable object diikuti nama properti baru secara langsung menambahkan properti baru
            data.dailySalary = (6 * this.#salary.typeA) + (overtime * this.#salary.typeB); 
            console.log(data.dailySalary);
        } else {
            data.dailySalary = data.dailyHours * this.#salary.typeA;
            console.log(data.dailySalary);
        }

        this.#attendance.push(data);
        //cara memasukkan data pada object, selama nama datanya sama, bisa ditulis cuma sekali.. contoh pada clock_out dibawah.
        //this.attendace.push({clock_in: clock_in, clock_out})
    };


    viewAttendance = () => {
        return this.#attendance;
    };

    totalSalary = () => {
        let total = 0;
        // cara 1
        // for (let index = 0; index < this.attendance.length; index++) {
        //     total += this.attendance[index].dailySalary;
        // }
        // cara 2
        this.#attendance.forEach((val) => {
            total += val.dailySalary;
        });
        // cara 3
        let total2 = this.#attendance.reduce((prev, current) => {
            console.log(prev);
            console.log(current);
            return prev + current.dailySalary;
        }, 0);
        console.log(total2);
        return total;
    };
}


class PartTime extends Employee {
    #salary = {
        typeA: 50000,
        typeB: 35000,
    };
    #attendance = [];
    // properti untuk menyimpan berapa lama pekerja bekerja. dalam bentuk ARRAY karena data dikumpulkan secara kolektif seperti per bulan. 
    constructor(_name, _age, _email, _job) {
        super(_name, _age, _email, _job)
    }

    addAttendance = (clock_in, clock_out) => {
        console.log(clock_in);
        console.log(clock_in.split(":")[0]);
        console.log(clock_out);
        console.log(typeof parseInt(clock_out.slice(0, 2)));

        let data = {
            in: clock_in,
            out: clock_out,
            // bagusnya menggunakan split karena index menit masih bisa digunakan nantinya.
            dailyHours: parseInt(clock_out.split(":")[0]) - parseInt(clock_in.split(":")[0]),
        };

        let overtime = data.dailyHours - 6;
        console.log(data.dailyHours);
        console.log(overtime);
        if (overtime > 0) {
            data.dailySalary = (6 * this.#salary.typeA) + (overtime * this.#salary.typeB); //penggunaan titik setelah nama variable object diikuti nama properti baru secara langsung menambahkan properti baru
            console.log(data.dailySalary);
        } else {
            data.dailySalary = data.dailyHours * this.#salary.typeA;
            console.log(data.dailySalary);
        }

        this.#attendance.push(data);
        //cara memasukkan data pada object, selama nama datanya sama, bisa ditulis cuma sekali.. contoh pada clock_out dibawah.
        //this.attendace.push({clock_in: clock_in, clock_out})
    };

    viewAttendance = () => {
        return this.#attendance;
    };

    totalSalary = () => {
        let total = 0;
        // cara 1
        // for (let index = 0; index < this.attendance.length; index++) {
        //     total += this.attendance[index].dailySalary;
        // }
        // cara 2
        this.#attendance.forEach((val) => {
            total += val.dailySalary;
        });
        // cara 3
        let total2 = this.#attendance.reduce((prev, current) => {
            console.log(prev);
            console.log(current);
            return prev + current.dailySalary;
        }, 0);
        console.log(total2);
        return total;
    };
}


let employee = [
    new FullTime("Mamang", 18, "mamangRacing@mail.com", "Racer"),
    new FullTime("Hai", 20, "Hai@mail.com", "Racer"),
    new PartTime("Lu Bu", 55, "lubu@mail.com", "Racer"),
    new PartTime("Zhao Yun", 110, "dinastywarrior@mail.com", "Racer"),
];

console.log(employee[0].addAttendance("09:00", "16:00"));
console.log(employee[1].addAttendance("09:00", "15:00"));
console.log(employee[1].addAttendance("10:00", "15:00"));
console.log(employee[0].totalSalary());
console.log(employee[1].totalSalary());
console.log(employee[0].viewAttendance());
console.log(`karyawan \n nama = ${employee[1].name}\n umur = ${employee[1].age} `);



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