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
      clearTimeout(this.timeoutId);
      //clearTimeoutにtimeoutIdを渡すことでタイマーが止まる
        })
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
}

const panels=[
  new Panel(),
  new Panel(),
  new Panel(),
];

const spin =document.getElementById('spin');
spin.addEventListener('click',()=>{
panels.forEach(panel =>{
  panel.spin();
  //panelにはclass Panelから値を引き出してるので、panel()とするだけで実行される。
})
});
}