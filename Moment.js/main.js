(()=>{
'use strict'

const input = document.querySelector('input')
const button = document.querySelector('button')
const p = document.querySelector('p')

button.addEventListener('click',()=>{
const d = new Date(input.value);
  p.textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
});
})();