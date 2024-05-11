//1-2+3-4+5


const a = 5;
const b = 7;
const c = 10;

console.log(a, b, c);

const sum = a + b + c;
console.log(sum);
const txt1 = 'Laba';
const txt2 = 'diena';
const txt3 = 'Lietuva';

console.log(txt1, txt2, txt3);



const note = [3, 8, 5, 14, 9];
const note2 = [5, 7, 6, 1, 10];
const note3 = [11, 15, 20, 4, 20];
console.log(note, note2, note3);

logic = note[0] - note[1] + note[2] - note[3] + note[4];
logic1 = note2[0] - note2[1] + note2[2] - note2[3] + note2[4];
logic2 = note3[0] - note3[1] + note3[2] - note3[3] + note3[4];
console.log(logic);
console.log(logic1);
console.log(logic2);

const book = ['zuikis', 'meska', 'lape', 'stirna', 'briedis'];
const book2 = ['raudona', 'geltona', 'melyna', 'zalia', 'juoda'];
const book3 = ['zmogus', 'voras', 'arklys', 'lokys', 'paukstis'];

console.log(book, book2, book3);

console.log(book[4] + ',', book[3] + ',', book[2] + ',', book[1] + ',', book[0]);
console.log(book2[4] + ',', book2[3] + ',', book2[2] + ',', book2[1] + ',', book2[0]);
console.log(book3[4] + ',', book3[3] + ',', book3[2] + ',', book3[1] + ',', book3[0]);



console.log('----------------');

const x = 4;
const y = 6;
//a.
if (x < y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
//b.

if (x > y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//c.
if (x === y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//d.
if (x !== y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
//e.
if (x >= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

//f.
if (x <= y) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

const text = 'Kebabas';
const text2 = 'Lavase';
const ilgis = text.length
const ilgis2 = text2.length
console.log('Teksto ilgis ' + ilgis);
console.log('Teksto ilgis ' + ilgis2);

if (text > text2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (text < text2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (text === text2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (text !== text2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (text >= text2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (text <= text2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
console.clear()

function arLyginis(number) {
    if (number % 2 === 0) {
        console.log('Skaicius yra lyginis');
    } else {
        console.log('Skaicius nelyginis');
    }

}
arLyginis(7)
arLyginis(6)