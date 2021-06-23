'use strict'

{
  class Panel {
    constructor(game) {
      this.game = game;
      this.el = document.createElement('li');
      this.el.classList.add('pressed');
      this.el.addEventListener('click', () => {
        this.check();
      })
    }
    getEl() {
      return this.el;
    }
    activate(num) {
      this.el.classList.remove('pressed');
      this.el.textContent = num;
    }

    check() {
      if (this.game.getCurrentNum() === parseInt(this.el.textContent, 10)) {
        //第2引数として１０、１０進数で処理という意味
        this.el.classList.add('pressed');
        this.game.addCurrentNum();

        if (this.game.getCurrentNum() === 4) {
          clearTimeout(this.game.getTimeoutId());
        }
      }
    }
  }
  class Board {
    constructor(game) {
      this.game = game;
      this.panels = [];
      for (let i = 0; i < 4; i++) {
        this.panels.push(new Panel(this.game))
      }
      this.setup();
    }

    setup() {
      const board = document.getElementById('board');
      this.panels.forEach(panel => {
        // board.appendChild(panel.el);
        // クラスのプロパティーに直接アクセスしないほうがいい。メソット経由で取得
        board.appendChild(panel.getEl());
        // オブジェクト思考のカプセル化

      });
    }
    activate() {
      const nums = [0, 1, 2, 3];
      this.panels.forEach(panel => {
        const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        panel.activate(num);
        //this.panelsに入ってるのは
        // this.panels = [];
        // for (let i = 0; i < 4; i++) {
        //   this.panels.push(new Panel())
        // }
        // this.setup();
      });
    }
  }

  


  class Game {
constructor(){
  this.board = new Board(this);

  this.currentNum = undefined;
  this.startTime = undefined;
  this.timeoutId = undefined;

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    this.start();
    }) 
  }
  start(){
    if (typeof this.timeoutId !== 'undefined') {
      clearTimeout(this.timeoutId);
    }
    this.currentNum = 0;
    this.board.activate();

    this.startTime = Date.now();
    this.runTimer();
  }
    runTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = ((Date.now() - this.startTime) / 1000).toFixed(2);
    this.timeoutId = setTimeout(() => {
      this.runTimer();
    }, 10);
  }
  addCurrentNum() {
    this.currentNum++;
  }

  getCurrentNum(){
    return this.currentNum;
  }

  getTimeoutId(){
    return this.timeoutId;
  }
  }
  new Game();

}

// this有り
// thisは、そのクラスのオブジェクトを表します。
// よってクラス内でメソッドを跨いで変数を使いたい場合にthisをつけます。

// this無し
// そのメソッド内だけで使う変数の場合はthis不要です。