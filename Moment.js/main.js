(()=>{
'use strict'
const start = moment('2018-01-10 08:00:00');
const end = moment('2018-01-10 10:30:00');

// console.log(end.diff(start));//秒数ででる
// console.log(end.diff(start,'hour'));//時間しか出ない
// console.log(end.diff(start,'hour',true));//時間以下もでる
// const posted = moment('2018-01-10 08:00:00');
// console.log(posted.fromNow());//現在からどれぐらい前か
const posted = moment('2021-06-22 08:00:00');
console.log(posted.fromNow());

})();