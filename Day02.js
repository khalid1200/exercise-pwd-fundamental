// 1 Write a code to convert celsius to fahrenheit
// INPUT
let celsius = 40;

// PROCESS
let fahrenheit = 9 / 5 * celsius + 32;

// OUTPUT
console.log(fahrenheit);

//2



// 3 Write a code to check whether the number is prime number or not
// INPUT = data number
// PROCESS
let angka = 8;
let hasilAngka = "";

for (let start = 2; start <= angka; start++)
// habis dibagi dirinya sendiri
if (start === angka){
    hasilAngka = "bilangan prima";
// bisa dibagi bilangan lain
} else if (angka % start === 0){
    hasilAngka = "bukan bilangan prima";
    break;
} else {
    hasilAngka = "bilangan prima";
}

console.log(hasilAngka);


// 4 Write a code to find the sum of the numbers 1 to N
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


//5 Write a code to find factorial of a number.
// INPUT : berupa data number

// PROCESS
// deklarasi data
let h = 6;
let p = 1;
// mencari FACTORIAL : angka tertinggi dikali dengan angka dibawahnya sampai batas yang ditentukan, 1.
for (let y = h; y >= 1; y--){
    p = p * y;
}
console.log(p);


//6 