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

/*
now = 2021-06-22

bday: 2000-06-21-> this: 2021-06-21 -> next: 2022-06-21 ->364
bday: 2000-06-22-> this: 2021-06-22 -> next: 2022-06-22 ->365
bday: 2000-06-23-> this: 2021-06-23 -> next: 2021-06-23 ->1
*/

const thisBirthday = bday.clone().year(now.year());
//yearだけ今年に書き換える
let nextBirthday;

if(now.isSameOrAfter(thisBirthday)){//同じか後か
  //日付で比べる
  nextBirthday = thisBirthday.clone().add(1,'year');
}else{
  nextBirthday = thisBirthday;
}

// console.log(nextBirthday.diff(now, 'day',true));
const left = Math.ceil(nextBirthday.diff(now,'day',true));
//小数点切り上げ　ceil
return `今、${age}歳です！生まれてから${days}日経ちました！次の誕生日は${nextBirthday.format('LL')}で、あと${left}日！`;
}




button.addEventListener('click',()=>{
  p.textContent = getResult();
})

})();