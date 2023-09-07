// 1 area of rectangle
// INPUT : length, width
let length = 15;
let width = 10;

// PROCESS
let area = length * width;

// OUTPUT
console.log("rectangle area >>", area);


// 2 PERIMETER OF RECTANGLE
// INPUT : length, width
length = 30;
width = 12;

// PROCESS
let perimeter = (length + width)*2;

// OUTPUT
console.log("rectangle perimeter >>", perimeter);


//3 diameter, circumference, and area of a cirlce
// INPUT
let r = 14;
let pi = 22/7;

// PROCESS
let d = r*2;
let circumference = pi * d;
area = Math.pow(r, 2) * pi;

// OUTPUT
console.log("output diameter >> ", d);
console.log("output keliling >>", circumference);
console.log("output luas >>", area);


//4 angles of triangle if two angles are given
// INPUT
let sudutA = 70;
let sudutB = sudutA;

// PROCESS
let sudutC = 180 - (sudutA + sudutB);

// OUTPUT
console.log(sudutC);


//5 get difference between dates in days
// INPUT
const tanggalA = new Date("09/01/2023");
const tanggalB = new Date("09/04/2023");

// PROCESS
let dateResult = (tanggalB - tanggalA) / 864e5;

// OUTPUT
console.log(Math.abs (dateResult));


//6 convert days to years, months and days
// INPUT
let jumlahHari = 400;

// PROCESS
let year = Math.floor(jumlahHari / 365);
let month = Math.floor(jumlahHari % 365 / 30);
let days = Math.floor(jumlahHari % 365 % 30);

// OUTPUT
console.log(year);
console.log(month);
console.log(days);