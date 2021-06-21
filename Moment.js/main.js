(()=>{
'use strict'
// const d = moment('2018-02-30');
// console.log (d.isValid());//判別

const d1 = moment('2018-02-03');
const d2 = moment('2018-02-05');
const d3 = moment('2018-02-08');

// console.log(d1.isBefore(d2));//true
// console.log(d1.isAfter(d2));//false
// console.log(d1.isSame(d2));//false 同じかどうか
// console.log(d2.isBetween(d1, d3));//true
console.log(d2.isLeapYear());//false うるう年かどうか
})();