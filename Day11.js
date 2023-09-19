// soal pertama
const columnNumber = (par) => {
    const huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;

    for (let i = 0; i < par.length; i++) {
        let char = par.charAt(i);
        console.log(char);
        let nilaiChar = huruf.indexOf(char) + 1;
        console.log(nilaiChar);
        result = result * 26 + nilaiChar;
    }
    return result;
}
console.log(columnNumber("AZZ"));

// soal kedua :
// let input = [2,2,1];
// for (let i = 0; i < input.length; i++) {
//     for (let j = i+1; j < input.length; j++) {

//     }
// }


// soal ketiga : anagram
let kata1 = "anagram";
let kata2 = "anagarm";
const isAnagram = (s, t) => {

    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (s.charAt[i] == t.charAt[j]) {
                    return
                }
            }
        }

    }

}
console.log(kata1, kata2);