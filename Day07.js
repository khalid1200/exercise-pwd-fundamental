// soal pertama : Create a function to check if two objects are equal
// INPUT : 2 object;
let a1 = {
    name: "Papa Cookies",
    produk: "Kue",
}
let b1 = {
    name: "Dunkin Donut",
    produk: "Donat"
}

// OUTPUT : ketika dua object memiliki property yang sama, maka true; jika tidak false; output  nilai boolena
// PROCESS :
// 1. mengakses tiap property pada kedua object
const equalObject = (para1, para2) => {
    let hasil1 = Object.keys(para1);
    console.log(hasil1.length);
    let hasil2 = Object.keys(para2);
    console.log(hasil2);
    let hasil3 = "";

    for (let i = 0; i < hasil1.length; i++) {
        if(hasil1[i] === hasil2[i]) {
            hasil3 = true;
        } else {
            hasil3 = false;
        }
    }
    return hasil3;
}
console.log(equalObject(a1, b1));


// soal kedua : Create a function to get the intersection of two objects
// e : Input : { a: 1, b: 2 } & { a: 1, c: 3 } =>  Output: { a: 1 }
// INPUT : 2 data array; 
let obj1 = {
    a: 1,
    b: 2,
    c: 3
};
let obj2 = {
    a: 1,
    c: 2
};
// OUTPUT : print data yg memiliki property DAN value yang sama;
// PROCESS : 
const printSame = (para1, para2) => {
    let array1 = Object.entries(obj1);
    console.log(array1);
    let array2 = Object.entries(obj2);
    console.log(array2);
    let hasil = "";

    for (let i = 0; i < array1.length; i++) {
        console.log(array1.length);
        for(let j = 0; j < array1.length; j++) {
            if (array1[i] === array2[j]) {
                hasil = array1[i];
                console.log(hasil);
            }
        }
    }
return hasil;
}

console.log(printSame(obj1, obj2));