// soal ke 1 : write a code to display the multiplication table of a given integer
// INPUT : angka = , 
let angka = 3;
let batas = 9;
let hasil = 0;
// OUTPUT : hasil = angka * x;
// PROCESS : 
// 1. membuat looping   
for (let i = 1; i <= batas; i++){
    //console.log(`${angka} x ${i} = ${angka * i} \n`);
    // 2. melakukan operasi pengalian
    let  kali = angka * i;  
    hasil += (`${angka} x ${i} = ${kali} \n`);
}

console.log(hasil);

// soal ke 2 : Write a code to check whether a string is a palindrome or not
// INPUT : data string; mengakses masing2 alamat karakter pada string;
let kataPertama = "kota";
let kataKedua = "";
let hasilPal = "";
// OUTPUT : 
// 1. kalau kataPertama dan kataKedua sama => palindrome
// 2. kalau beda => bukan palindrome
// PROCESS : 1. membuat looping 
for (let loopPal = kataPertama.length; loopPal >= 0; loopPal--) {
    console.log(loopPal);
// 2. membuat variable untuk menampung hasil 
    kataKedua += kataPertama.charAt(loopPal)
}
console.log(kataKedua);
//3. menentukan if else
if (kataPertama.toLowerCase() === kataKedua.toLowerCase()) {
    hasilPal = `kata ${kataPertama} adalah Palindrome`
} else {
    hasilPal = `kata ${kataPertama} bukan Palindrome`
}

console.log(hasilPal);


// soal ke 3 : Write a code to convert centimeter to kilometer.
// INPUT : konversi cm ke km; diketahui cm =; km=;
// 1. mengetahui nilai cm ke km
let cm = 800000;
//2. operasi konversi
let km = cm/100000;

// PROCESS :
console.log(km);


// soal ke 4: Write a code to format number as currency (IDR)
// INPUT : nominal
// 1. deklarasi nominal
let nominal = 5e5;
// PROCESS : mengubah menjadi bentuk currency indonesia
let currency = nominal.toLocaleString('id', {style : 'currency', currency : 'idr'})

console.log(currency);


// soal ke 5: Write a code to remove the first occurrence of a given “search string” from a string
// INPUT : data string, data input
// OUTPUT : menghapus karakter dari data input yang ada di data string
// PROCESS : 
let kataInput = "Hello World";
let hasilInput = kataInput.replace("ell", "");

console.log(hasilInput);


//soal ke 6 : Write a code to capitalize the first letter of each word in a string
// INPUT : data string,
let inputCap = "hello world indonesia";
console.log(inputCap.length);
let resultCap = "";
// OUTPUT :
// PROCESS :
for (let loopCap = 0; loopCap <= inputCap.length; loopCap++) {
    console.log(loopCap);
    
    //let charAtCap = inputCap.charAt(loopCap);
    if (loopCap === 0){
        resultCap += inputCap.charAt(0).toUpperCase()
    } else if (inputCap.charAt(loopCap - 1) === " ") {
        resultCap += inputCap.charAt(loopCap).toUpperCase()
    } else {
        resultCap = resultCap + inputCap.charAt(loopCap)
    }
}
console.log(resultCap);

// carane rehan
// let kalimat = "halo dulur dulur";
// let potong = kalimat.split(" ")
// console.log(potong)
// let result = ""
// potong.forEach((kata) => {
//     let dipenggalPerHurufLagi = kata.split("")
//     console.log(dipenggalPerHurufLagi)
//     dipenggalPerHurufLagi[0] = dipenggalPerHurufLagi[0].toUpperCase()
//     result += `${dipenggalPerHurufLagi.join("")} `
// })
// console.log(result)

// soal ke 7 : write a code to reverse a string
// INPUT : data string; masing2 karakter dalam string memiliki alamat yg dapat diakses;
let kata = "Kuda";
let hasilReverse = "";

console.log(kata.length);
// OUTPUT : string ter reverse;

// PROCESS :
// 1. membuat looping 
for (let loopReverse = kata.length; loopReverse >= 0; loopReverse--) {
    console.log(loopReverse);
// 2. membuat variable untuk menampung hasil 
    hasilReverse += kata.charAt(loopReverse)
}
console.log(hasilReverse);


// soal ke 8 : Write a code to swap the case of each character from string
// INPUT : data string; 
let inputSoal = "The";
let hasilSwap = "";

// OUTPUT : diganti yg kapital jadi kecil, kecil jadi kapital
// PROCESS : 1. mencari index per huruf dengan loop

for (let loopSwap = 0; loopSwap <= inputSoal.length - 1; loopSwap++) {

    // penyederhanaan
    const ygDicek = inputSoal.charAt(loopSwap)

    if (ygDicek == ygDicek.toLowerCase()) {
        hasilSwap += ygDicek.toUpperCase();
    } else if (ygDicek == ygDicek.toUpperCase()) {
        hasilSwap += ygDicek.toLowerCase();
    }
}

console.log(hasilSwap);



// soal ke 9 : Write a code to find the largest of two given integers
// INPUT : 2 data number; 
let number1 = 2;
let number2 = 1;
let hasilLargest = "";

console.log(typeof number1);
// OUTPUT :
// PROCESS : if else statement
if (number1 < number2) {
    hasilLargest += `${number2} merupakan angka paling besar`
} else if (number1 > number2) {
    hasilLargest += `${number1} merupakan angka paling besar`
} else if (number1 === number2) {
    hasilLargest += `${number1} merupakan angka yang sama`
} 

console.log(hasilLargest);


//soal ke 10 : Write a conditional statement to sort three numbers
// INPUT : conditional statement if; 3 data number; 
let x = 2;
let y = 1;
let z = 3;
let hasilUrutan = "";

// OUTPUT : 3 data number berurutan
// PROCESS :
// 1. membuat if
if (x > y && x > z) {
    hasilUrutan = `${x}`;
    if (z > y) {
        hasilUrutan = `${x}, ${z}, ${y}`;
    } else {
        hasilUrutan = `${x}, ${y}, ${z}`;
    }
}
if (y > x && y > z) {
    hasilUrutan = `${y}`;
    if (z > x) {
        hasilUrutan = `${y}, ${z}, ${x}`;
    } else {
        hasilUrutan = `${y}, ${x}, ${z}`;
    }
}
if (y > x && y > z) {
    hasilUrutan = `${y}`;
    if (z > x) {
        hasilUrutan = `${y}, ${z}, ${x}`;
    } else {
        hasilUrutan = `${y}, ${x}, ${z}`;
    }
}
if (z > x && z > y) {
    hasilUrutan = `${z}`;
    if (y > x) {
        hasilUrutan = `${z}, ${y}, ${x}`;
    } else {
        hasilUrutan = `${z}, ${x}, ${y}`;
    }
}

console.log(hasilUrutan);



// soal ke 11 : Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// INPUT : 
let dataInput = "";
let dataBox = "";
// OUTPUT : jika data "string" = 1, number = 2, otherDataType = 3;
// PROCESS :
// 1. mencari jenis data dengan typeOf
console.log(typeof (dataInput))
if (typeof(dataInput) === "string") {
    dataBox = `1`;
} else if (typeof(dataInput) === "number") {
    dataBox = `2`;
} else {
    dataBox = `3`;
}
console.log(dataBox);


// soal ke 12 : Write a code to change every letter a into * from a string of input
// INPUT : data berupa string;
let dataForChange = "An apple a day keeps the doctor away";
console.log(dataForChange.length);
let hasilChange = "";

// OUTPUT : karakter yg diinputkan akan menjadi *
// PROCESS : 1. membuat loop
for (let loopChange = 0; loopChange <= dataForChange.length; loopChange++) {
    console.log(loopChange);
    let charAtChange = dataForChange.charAt(loopChange);
    if (charAtChange.toLowerCase() === "a") {
        charAtChange = "*";
    }
    hasilChange += charAtChange
}
console.log(hasilChange);