'use strict';

console.clear();//コンソールログを初期化。リロードでもいいが、今回は紹介程度？

{
let year = 2020;
let month =4;//5

function getCalendarHead(){//先月のカレンダーの頭を取得する
const dates = [];
const d = new Date(year,month,0).getDate(); //d　末日の日付
const n = new Date(year,month,1).getDay(); //n　末日の曜日　数字で取得
//date:日付, day: 曜日

for(let i=0; i<n; i++){//n来月の初日の曜日の代入
  //30
  //29,30
  //28,29,30
  dates.unshift({//unshift 配列の最初に代入していく
    date:d - i,//ｎをループさせながら、末日から1ずつ引いていく
    isToday:false,
    isDisabled: true,
  });
}
return dates;
}


function getCalendarBody(){
  const dates =[]; 
  const lastDate = new Date(year, month + 1, 0).getDate();
  //末日は、来月の１日の一日前の日付ということで０をしていする。
  //慣習で月は０から始まり、日付は１から始まる為
  
  for (let i = 1;i<=lastDate; i++){
    dates.push({
      date:i,
      isToday:false,
      isDisabled:false,
    });
  }
  return dates;
}

function getCalendarTail(){//最終週の来月の日付部分
  const dates = [];
  const lastDay = new Date(year,month+1, 0).getDay();

  for (let i =1;i<7-lastDay;i++){
    dates.push({
      date:i,
      isToday:false,
      isDisabled: true,

    });

  }
return dates;
}

function clearCalendar(){
  const tbody = document.querySelector(`tbody`);
  while (tbody.firstChild){//tbodyに子要素がある。trueの時
    tbody.removeChild(tbody.firstChild);//削除する
  }
}

function renderTitles(){
  const title = `${year}/${String(month+1).padStart(2, `0`)}`;//padStartで二桁にして、二桁ではないときに０を代入 
  //文字列にしか使えないのでStringを使って文字列に変換している。結果を文字列として出力するメソッド
  // ('0' + (month + 1)).slice(-2)でも可
  document.getElementById(`title`).textContent = title;
}

function renderWeeks(){
  const dates = [
    ...getCalendarHead(),//スプレット構文を使うことで、一つ一つの結果を結合させる。
    ...getCalendarBody(),//実行した結果を反映させるためにそれぞれの関数にreturnさせる。
    ...getCalendarTail(),
  ];

const weeks = [];//日付のデータを収集したので、一週間に直す
const weeksCount = dates.length / 7;//全体を７で割って週の数を出す

for (let i= 0; i<weeksCount; i++) {
  weeks.push(dates.splice(0,7));
  // console.log(dates.length / 7);
  //　spliceの実験。なぜWeeksCountを使うのか
  // weeks[i]=dates.splice(0,7)でもおｋ
}

// console.log(weeks)

weeks.forEach(week =>{
  const tr = document.createElement(`tr`);
  week.forEach(date=>{
    const td = document.createElement(`td`);
// console.log(date.date)
    td.textContent=date.date;//dateオブジェクトの中のdateプロパティー
    // console.log(td)
    if(date.isToday){
      td.classList.add(`today`);
    }
    
    if(date.isDisabled){
      td.classList.add(`disabled`)
    }

    tr.appendChild(td);
  });
  document.querySelector(`tbody`).appendChild(tr)
});

}

function createCalendar(){
clearCalendar();
renderTitles();
renderWeeks();
}

document.getElementById(`prev`).addEventListener(`click`,()=>{//前の月に移動
  month--;
  if(month< 0){//年をまたいだ時の処理
    year--;
    month = 11;
  }
  createCalendar();
});
document.getElementById(`next`).addEventListener(`click`,()=>{
  month++;
  if(month > 11){
    year++;
    month = 0;
  }
  createCalendar();
});

createCalendar();
}