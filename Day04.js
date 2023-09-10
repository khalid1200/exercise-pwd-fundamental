// soal ke 1 : loop pola
// INPUT : tinggi pola segitiga = input (angka);
let inputStg = 5;

// OUTPUT : piramid se tinggi (input), angka urut;


// PROCESS : 

//2. memasukkan ke function 
const segitiga = (tinggi) => { 
    let output = "";
    let output2 = "";
    // 1. membuat loop vertikal  
    for (let i = 1; i <= tinggi; i++) {
    // 2. membuat loop horizontal    
        for (let j = 1; j <= i; j++) {      
          output += `0${j} `;
        }
        output += "\n";
    }

    return output
}

console.log(segitiga(5))


// soal ke 2 : create a function that can loop the number of times according to the input we provide
// and will replace multiples of 3 with  "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// INPUT : 
// OUTPUT :
// PROCESS :

const fizzBuzz = (n) => {
    
}
// console.log(tampung);
// console.log(fizzBuzz());





// soal ke 3 : BMI
// INPUT : 
// 1. formula : BMI = weight(kg) / (height(meter)) ** 2;
// 2. parameter : weight & height;
let berat = 80; // dalam kg
let tinggi = 180; // dalam cm
// OUTPUT :
/**
 * < 18.5 return "less weight"
 * 18.5 - 24.9 return "ideal"
 * 25.0 - 29.9 return "overweight"
 * 30.0 - 39.9 return "very overweight"
 * > 39.9 return "obesity"
 */

// PROCESS :
const bmi = (weight, height) => {
    let resultBMI = weight / (height / 100) ** 2;
    console.log(resultBMI);
    
    if (resultBMI < 18.5) {
        resultBMI = "less weight";
    } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
        resultBMI = "ideal";
    }  else if (resultBMI >= 25.0 && resultBMI <= 29.9) {
        resultBMI = "overweight";
    } else if (resultBMI >= 30.0 && resultBMI <= 39.9) {
        resultBMI = "very overweight";
    } else {
        resultBMI = "obesity";
    }
    return resultBMI
}
console.log(bmi(berat, tinggi));



// soal ke 4 : write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// INPUT : 
let inputNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inputNum.length);
// OUTPUT :


// PROCESS :
const oddEven = (ongko) => {
    let outputNum = [];

    for (let sNum = 0; sNum <= ongko.length; sNum++) {
        
        if (ongko[sNum] % 2 !== 0) {
            outputNum.push(sNum);
    }
    } return outputNum
}
console.log(oddEven(inputNum));


// soal ke 5 : write a function to split a string and convert it into an array of words
// INPUT : data string;
let dataStr = "Indonesia Raya, Merdeka.. Merdeka..";

// OUTPUT :


// PROCESS : 
const convertStr = (inputStr) => {
    
    let outputStr = inputStr.split(" ");
    return outputStr;
}
console.log(convertStr(dataStr));
console.log(convertStr("merdeka merdeka"));