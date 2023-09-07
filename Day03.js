// soal pertama : write a code to display the multiplication table of a given integer
// INPUT : angka = , 
let angka = 3;
let batas = 10;
let hasil = "";
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

// soal kedua : Write a code to check whether a string is a palindrome or not




// soal ketiga : Write a code to convert centimeter to kilometer.
// INPUT : konversi cm ke km; diketahui cm =; km=;
// 1. mengetahui nilai cm ke km
let cm = 800000;
//2. operasi konversi
let km = cm/100000;

// PROCESS :
console.log(km);

// soal keempat: Write a code to format number as currency (IDR)
// INPUT : nominal
// 1. deklarasi nominal
let nominal = 5e5;
// PROCESS : mengubah menjadi bentuk currency indonesia
let currency = nominal.toLocaleString('id', {style : 'currency', currency : 'idr'})

console.log(currency);
