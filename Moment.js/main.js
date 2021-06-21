(()=>{
'use strict'
const d = moment('2018-01-10 15:35:24');

// console.log(d.set('year',2020).format('LLLL'));
// //オブジェクト自体を書き換えてしまう
// console.log(d.get('year'));

console.log(d.clone().set('year',2020).format('LLLL'));
//オブジェクト自体を書き換えてしまう
console.log(d.get('year'));

})();