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
let input1 = 2;
let input2 = 4;
let input3 = -2;
let hasilUrutan = "";
// OUTPUT : 3 data number berurutan
// PROCESS :
// 1. membuat if
if (input1 >= input2 >= input3) {
    
}
