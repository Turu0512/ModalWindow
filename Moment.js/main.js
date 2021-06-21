(()=>{
'use strict'
const d = moment('2018-01-10 15:35:24');

// console.log(d.clone().add(3,'day').format('LLLL'));
// console.log(d.clone().subtract(3,'year').format('LLLL'));
//３年前

// console.log(d.clone().add(1,'y').add(2,'M').format('LLLL'));
console.log(d.clone().add({y:1, M:2}).format('LLLL'));
})();