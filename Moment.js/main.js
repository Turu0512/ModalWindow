(()=>{
'use strict'
const d = moment('2018-01-10');
d.locale('en')//日本語のSrcをコメントアウトしてもいいが、一時的に表示を変えたいとき。
console.log(d.format('MMMM Do, dddd'));
//公式サイト、右上のDocs→Display→Formatで表示のさせ方
})();