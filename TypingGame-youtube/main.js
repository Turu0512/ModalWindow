'use strict'

{
var p = document.getElementById('text')
var textLists = [
  'Hello World',
  'This is my App',
  'How are you?',
  'Hello Hello',
];
var checkTexts = [];

checkTexts = textLists[0].split('').map(function(value){
  var span = document.createElement('span');
  span.textContent = value;
  p.appendChild(span);

  return span;
});
console.log(checkTexts);

p.textContent = textLists[0];



// console.log(checkText);

document.addEventListener('keydown',e =>{
  if(e.key === checkText[0]){
    console.log('正解！')
  }
})
}