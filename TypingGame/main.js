`use strict`;

{
function setWord(){
  word = words.splice(Math.floor(Math.random() * words.length),1)[0];//ワードが重複しないようにspliceを使う。
  // console.log(Math.random() * words.length)
  // console.log(Math.floor(Math.random() * words.length))
  target.textContent = word;
  loc = 0;
}

const words = [
`red`,
`blue`,
`pink`,
];
// console.log(words.length)
let word;
let loc = 0;
let startTime ;
let isPlaying =false;
const target =document.getElementById(`target`);


document.addEventListener(`click`,() => {//クリックしたら始まるようにする
if(isPlaying === true){
  return
}
isPlaying=true
  startTime=Date.now();
  setWord();
  
});

document.addEventListener(`keydown`, e =>{
if(e.key !== word[loc]){//早期リターン、アーリーリターン　処理が必要ない場合にプログラムの進行を止める。
  return;
}
  loc++;
  //1:_ed
  //2:__d
  //3:___
  target.textContent =`_`.repeat(loc) + word.substring(loc);

  if(loc === word.length){
    if(words.length === 0){
      const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2); //完了までの時間
      const result = document.getElementById(`result`);
      result.textContent = `Finished! ${elapsedTime}  seconds!`;
      return
    }
    setWord();
  }
});



}