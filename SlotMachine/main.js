'use strict'

{
class Panel{
  constructor(){
    const section =document.createElement('section');
    //このconstructorでしか使わないのでconst
    section.classList.add('panel');

    this.img = document.createElement('img');
    this.img.src=this.getRandomImage();

    this.timeoutId = undefined;

    this.stop = document.createElement('div')
    this.stop.textContent = 'STOP';
    this.stop.classList.add('stop')
    this.stop.addEventListener('click',()=>{
      if(this.stop.classList.contains('inactive')){
        return;
      }
      this.stop.classList.add('inactive')
      clearTimeout(this.timeoutId);
      //clearTimeoutにtimeoutIdを渡すことでタイマーが止まる
      panelsLeft--;

      if(panelsLeft===0){//初期値が３でstopをすべて押し終えると発動
        checkResult();
      }
        });
    //thisを使うのは他に呼び出されたときに対応するため

  section.appendChild(this.img);
  section.appendChild(this.stop);

  const main = document.querySelector('main');
  main.appendChild(section);
  }

  getRandomImage(){
const images = [
  'img/seven.png',
  'img/bell.png',
  'img/cherry.png',
]
return images[Math.floor(Math.random()*images.length)]
  }//ランダムなイメージの選択

  spin(){
    this.img.src = this.getRandomImage();
    this.timeoutId=setTimeout(() =>{
      //setTimeoutからIdを受け取る
      this.spin();
    },50);
  }
  isUnmatched(p1,p2){
    //下のcheckResultのなかのisUnmatchedから引数を得ている。
    return this.img.src !==p1.img.src && this.img.src !== p2.img.src;
  }

  unmatch(){
    this.img.classList.add('unmatched');
  }
}
function checkResult(){
  if(panels[0].isUnmatched(panels[1],panels[2])){
    panels[0].unmatch();
  }
  if(panels[1].isUnmatched(panels[0],panels[2])){
    panels[1].unmatch();
  }
  if(panels[2].isUnmatched(panels[0],panels[1])){
    panels[2].unmatch();
  }
}
//(1) 左のパネル（panels[0]）が真ん中のパネル（panels[1]）と右のパネル（panels[2]）と同じか判定して、もし違っていたらpanels[0]にunmatchのクラスをつけて薄くする
// (2) 真ん中のパネル（panels[1]）が左のパネル（panels[0]）と右のパネル（panels[2]）と同じか判定して、もし違っていたらpanels[1]にunmatchのクラスをつけて薄くする
// (3) 右のパネル（panels[2]）が左のパネル（panels[0]）と真ん中のパネル（panels[1]）と同じか判定して、もし違っていたらpanels[1]にunmatchのクラスをつけて薄くする

const panels=[
  new Panel(),
  new Panel(),
  new Panel(),
];

let panelsLeft =3;

const spin =document.getElementById('spin');
  spin.addEventListener('click',()=>{
    if (spin.classList.contains('inactive')){
      return;
    }
    spin.classList.add('inactive');
  panels.forEach(panel =>{
    panel.spin();
    //panelにはclass Panelから値を引き出してるので、panel()とするだけで実行される。

})
});
}