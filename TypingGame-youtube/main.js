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

creatText();

function creatText(){
  var rnd =Math.floor(Math.random()*textLists.length);
  p.textContent = ''//文字列をリセットする
checkTexts = textLists[rnd].split('').map(function(value){
  var span = document.createElement('span');
  span.textContent = value;
  p.appendChild(span);
  // console.log(span)
  return span;
});
}
// console.log(checkTexts);

document.addEventListener('keydown',e =>{
  if(e.key === checkTexts[0].textContent){
    checkTexts[0].className = 'add-blue';
    checkTexts.shift();
    if(!checkTexts.length)creatText();
  }
})
}