// soal 1 : Write a code to convert celsius to fahrenheit
// INPUT
let celsius = 40;

// PROCESS
let fahrenheit = 9 / 5 * celsius + 32;

// OUTPUT
console.log(fahrenheit);

// soal 2 : Write a code to check whether the number is odd or even
// INPUT : angka; 
let x = 3;
let hasilModulo = 0;
// OUTPUT : angka termaasuk 'bilangan genap' atau 'bilangan ganjil'

// PROCESS : 
//1. angka termasuk genap bila habis dibagi 2
if (x % 2 === 0){
    hasilModulo = "Bilangan Genap";
} else {
    hasilModulo = "Bilangan Ganjil";
}
 console.log(hasilModulo);


// soal 3 : Write a code to check whether the number is prime number or not
// INPUT = data number
// PROCESS
let angka = 9;
let hasilAngka = "";

for (let start = 2; start <= angka; start++) {
    // habis dibagi dirinya sendiri
    if (angka == start){
        hasilAngka = "bilangan prima";
    // bisa dibagi bilangan lain
    } else if (angka % start === 0){
        hasilAngka = "bukan bilangan prima";
        break;
    } else {
        hasilAngka = "bilangan prima";
    }
}
console.log(hasilAngka);


// soal 4 : Write a code to find the sum of the numbers 1 to N
// INPUT
// data number

// PROCESS
// deklarasi data
let n = 5;
let hasil = 0;
// mencari SUMMARY : penjumlahan angka paling kecil sampai batas yang ditentukan (n)
for (let v = 1; v <= n; v++){
    hasil = hasil + v;
}
console.log(hasil);


// soal 5 : Write a code to find factorial of a number.
// INPUT : berupa data number

// PROCESS
// deklarasi data
let h = 30;
let p = 1;
// mencari FACTORIAL : angka tertinggi dikali dengan angka dibawahnya sampai batas yang ditentukan, 1.
for (let y = h; y >= 1; y--){
    p = p * y;
    console.log(y);
}
console.log(p);


// soal 6 :  