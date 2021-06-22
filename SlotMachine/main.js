'use strict'

{
class Panel{
  constructor(){
    const section =document.createElement('section');
    //このconstructorでしか使わないのでconst
    section.classList.add('panel');

    this.img = document.createElement('img');
    this.img.src='img/seven.png';

    this.stop = document.createElement('div')
    this.stop.textContent = 'STOP';
    this.stop.classList.add('stop')
    //thisを使うのは他に呼び出されたときに対応するため
  }
}

}