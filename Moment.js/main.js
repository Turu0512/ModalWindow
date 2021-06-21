(()=>{
'use strict'
const d = moment('2018-01-10 15:35:24');
// console.log(d.format('HH:mm:ss'));
// console.log(d.format('hh:mm:ss a'));
//hを小文字で１２時間表記。最後にaを付けると午前午後の表記
// d.locale('en');
// console.log(d.format('l'))
// console.log(d.format('ll'))
// console.log(d.format('lll'))
// console.log(d.format('llll'))
// console.log(d.format('L'))
// console.log(d.format('LL'))
// console.log(d.format('LLL'))
// console.log(d.format('LLLL'))
// console.log(moment('2018-1').daysInMonth());
// console.log(moment('2018-2').daysInMonth());
// console.log(d.toArray());//配列
// console.log(d.toObject());//オブジェクト
console.log(d.format('[Today]:L'))

})();