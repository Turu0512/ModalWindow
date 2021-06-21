(()=>{
'use strict'

const button = document.querySelector('button');
const p =document.querySelector('p');

function getResult() {
  const bday = moment(document.querySelector('input').value);

  if(!bday.isValid()){
    return '日付が無効です！'
  }

const now = moment();
const age = now.diff(bday,'year')
const days = now.diff(bday,'day')

return `今、${age}歳です！生まれてから${days}日経ちました！`
}

button.addEventListener('click',()=>{
  p.textContent = getResult();
})

})();