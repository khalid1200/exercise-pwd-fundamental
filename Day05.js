// soal ke 1 : Write a function to get the lowest, highest and average value in the array (with and without sort function).
// INPUT : data array;
let urutan = [3, 1, 2, 5, 4]
// OUTPUT : min max avg
// PROCESS : 

// dengan sort
//1. membuat fungsi, umumnya fungsi digunakan untuk mengolah data dari luar fungsi
const getLowHighAvg = (array) => {
    //2. untuk mengolah data array
    //2.a. mengurutkan data array terlebih dahulu
    let newArr = array.sort((a, b) => a - b);  //penggunaan function array.sort harus memakai callback function untuk mengurutkan
    console.log(newArr);
    //2.b. mengakses data terkecil dan terbesar
    let low = newArr[0];
    let high = newArr[newArr.length - 1];
    //2.c. menghitung rata2 dari seluruh data pada array
    // 2.c.1 variable penampung total penjumlahan
    let total = 0;

    // 2.c.2 mengakses data array satu per satu
     for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    // 2.c.3 dijumlahkan di variable penampung total
        total += array[i];    
    }    
    console.log(total);    
    // 2.c.4 dicari avg
    let avg = total / array.length;
    console.log(avg);    
    //3. untuk mendapatkan nilai low, hight, dan avg
    
    return `Lowest : ${low}, High : ${high}, Average : ${avg}`; 
};

console.log(getLowHighAvg(urutan));

// tanpa sort 
//1. membuat fungsi
const getLowHighAvgNoSort = (array) => {
    //2. mengolah data array
    let total = 0;
    let low = array[0];
    let high = array[0];
    
    //2.a mengakses data array satu per satu
    
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    total += array[index]
        if (low > array[index]) {
        low = array[index];
    } else if (high < array[index]) {
        high = array[index];
    }
    }
    let avg = total / array.length;
return `Lowest : ${low}, High : ${high}, Average : ${avg}`;
}

console.log(getLowHighAvgNoSort([6, 1, 8, 12]));


// soal ke 2 : Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

// soal ke 3 : Write a function to split a string and convert it into an array of words; a. Example : “Hello World” → [“Hello”, “World”]
// INPUT : 
let kalimatSplit = "Indonesia Raya Merdeka Merdeka";
// OUTPUT : array of words;

// PROCESS :
const fncSplit = (input) => {
    let resultSplit = input.split(" ");
    return resultSplit;
} 
console.log(fncSplit(kalimatSplit));




// soal ke 4 : Write a function to calculate each element in the same position from two arrays of integer; 
// Assume both arrays are of the same length; a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
// INPUT : dua array; array1 dan array2;
let arr1 = [2, 1, 3, 4];
let arr2 = [1, 3, 4];
// OUTPUT : array baru hasil penjumlahan; 
// PROCESS :
// 1. membuat fungsi dengan 2 parameter array input;
const penjumlahanArr = (par1, par2) => {
// 1.1. membutuhkan variable penampung hasil; karena tipe data dalam array number maka diberikan nilai number berupa 0;    
    let hasilPenjumlahan = 0;
// 4.0. variable array kosong untuk hasil akhir
    let pushArray = [];
// step tambahan = jika panjang array tidak sama maka dapat menggunakan cara berikut; instead of using par1, use Math.max from both parameters to decide which par.length that will be used.
    const maxLength = Math.max(par1.length, par2.length);
    console.log(maxLength);    
// 2. mengakses tiap index pada tiap array; karena diasumsikan panjang dari dua array sama maka menggunakan for-loop
    for (let i = 0; i < maxLength; i++) {
// 3. menjumlahkan array[i] dari kedua array;
        hasilPenjumlahan = (par1[i] || 0) + (par2[i] || 0); 
        console.log(typeof hasilPenjumlahan);
// 4. untuk hasil akhir berupa array, maka data dari hasilPenjumlahan di push ke dalam variable array kosong yg telah disediakan.
        pushArray.push(hasilPenjumlahan)
    }
return pushArray;
}

console.log(penjumlahanArr(arr1, arr2));


function sum(ar1, ar2) {
    let totalArray = [];
    const totalLength =  Math.max(arr1.length, arr2.length);
    for (let i = 0; i < totalLength; i++) {
        totalArray[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return totalArray;
}
console.log(sum(arr1, arr2));




// soal ke 5 : Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// INPUT : array 
let arrayElm = [1, 2, 3, 4, 5];
let inputElm = 1;
// OUTPUT : menambahkan element ke urutan terakhir pada array

// PROCESS : 
// 1. function
const fncElm = (array, input) => {
    let hasil = [];
    let result = [];
    for (let index = 0; index < array.length; index++) {
        console.log(index);
      
    }
    return hasil;
}
console.log(fncElm(arrayElm, inputElm));