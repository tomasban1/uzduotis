const marks = [0, 1, 2, 3, 4]
let sum = 0;
for (let i = 0; i <= 4; i++) {
    sum += marks[i]
}
console.log(sum);
console.log('------------');


for (let i = 0; i <= 100; i++) {
    let sum2 = 0
    sum2 += i
    console.log(sum2);
}
console.log('--------------');


const txt = ['a', 'b', 'c', 'd', 'e', 'f']
for (i = txt.length - 1; i >= 0; i--) {
    console.log(txt[i]);
}

console.log('-----------');

function numberCount(start, finnish, step) {
    let answer = 0;
    for (let i = start; i <= finnish; i++) {
        if (i % step === 0) {
            answer++
        }
    }

    return 'Skaičių intervale tarp ' + start + ' ir ' + finnish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';;
}
console.log(numberCount(8, 31, 3));
console.log(numberCount(0, 11, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(0, 11, 5));
console.clear();

//0-100
let rez = 0;
for (i = 0; i <= 100; i++) {
    rez += i
    console.log(rez);
}

let answer3 = 0;
for (let i = 0; i <= 100; i++) {
    answer3 += i;
}
console.log(answer3);

console.clear();
console.log('---------------');

//funkciju uzdaviniai
//1
function tusciaFunkcija() {

    return false
}
console.log(tusciaFunkcija());

//2
const n1 = 4;
const n2 = 7;
const n3 = 3
function daugyba(num1, num2) {
    let sandauga = num1 * num2
    return sandauga
}
console.log(daugyba(n1, n2));
console.log(daugyba(n3, n2));
console.log(daugyba(n1, n3));
console.log('---------------');
//3
let number = 0;
function skaitmenuKiekisSkaiciuje(number) {
    if (isNaN(number)) {
        console.log('Pateikta netinkamo tipo reiksme');

    } else {
        console.log('Skaitmenu kiekis ' + number.toString().length)

    }

    return number.toString().length

}
skaitmenuKiekisSkaiciuje(5);
skaitmenuKiekisSkaiciuje(781);
skaitmenuKiekisSkaiciuje(37060123456);
skaitmenuKiekisSkaiciuje('true');
skaitmenuKiekisSkaiciuje('asd');
skaitmenuKiekisSkaiciuje(NaN);
console.log('----------------');
//4

const a = [1];
const b = [1, 2, 3];
const c = [-5, 78, 14, 0, 18];
const d = [-5, 78, 14, 0, 18];
const e = [69, 69, 69, 69, 66];
const f = [-1, -2, -3, -4, -5, -6, -7, -8]
const g = [];
const h = 'Pomidoras';

function didziausiasSkaiciusSarase(y) {
    let max = y[0]
    if (Array.isArray(y) !== true) {
        return 'Pateikta netinkamo tipo reiksme'
    } else if (y.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias'
    }
    for (let i = 0; i < y.length; i++)
        if (y[i] > max)
            max = y[i]
    return max
}

console.log(didziausiasSkaiciusSarase(a));
console.log(didziausiasSkaiciusSarase(b));
console.log(didziausiasSkaiciusSarase(c));
console.log(didziausiasSkaiciusSarase(d));
console.log(didziausiasSkaiciusSarase(e));
console.log(didziausiasSkaiciusSarase(f));
console.log(didziausiasSkaiciusSarase(g));
console.log(didziausiasSkaiciusSarase(h))
console.log('----------------------------------');
//5

function isrinktiRaides(k1, k2) {
    if (typeof k1 !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo'
    } else if (k1.length === 0 || k1.length > 100) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio'
    } if (typeof k2 !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo'
    } else if (k2 <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz 0'
    } else if (k2 > k1.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį'
    } else {
        let pick = ''
        for (let i = k2 - 1; i < k1.length; i += k2) {
            pick += k1[i]
        }
        return pick

    }

}


console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));

//6
console.log('----------------------------');
function dalyba(d1, d2) {
    if (typeof d1 !== 'number') {
        return 'Pirmasis kintamasis yra ne skaiciaus tipo'
    } else if (typeof d2 !== 'number') {
        return 'Antrasis kintamasis yra ne skaiciaus tipo'
    } else {
        return d1 / d2
    }
}




console.log(dalyba(10, 2));
console.log(dalyba('sadfsa', 2));
console.log(dalyba(555, 'dddd'));
console.log(dalyba(NaN, NaN));
console.log(dalyba(2, 100));
console.log(dalyba());