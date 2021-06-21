(()=>{
'use strict'

const input = document.querySelector('input')
const button = document.querySelector('button')
const p = document.querySelector('p')

button.addEventListener('click',()=>{
// const d = new Date(input.value);
//   p.textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
const d = moment(input.value);
p.textContent = d.isValid() ? d.format('LL') : '無効な日付です';
});
})();