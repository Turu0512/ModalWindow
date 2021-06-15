'use strict';

console.clear();//コンソールログを初期化。リロードでもいいが、今回は紹介程度？

{
const year = 2020;
const month =4;//5

function getCalendarHead(){//先月のカレンダーの頭を取得する
const dates = [];
const d = new Date(year,month,0).getDate(); //d　末日の日付
const n = new Date(year,month,1).getDay(); //n　末日の曜日　数字で取得

for(let i=0; i<n; i++){
  //30
  //29,30
  //28,29,30
  dates.unshift({//unshift 配列の最初に代入していく
    date:d - i,
    isToday:false,
    isDisabled: true,
  });
}
console.log(dates);
}


function getCalendarBody(){
  const dates =[]; //date:日付, day: 曜日
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
  console.log(dates);
}

function getCalendarTail(){//来月のカレンダーのデータ
  const dates = [];
  const lastDay = new Date(year,month+1, 0).getDay();

  for (let i =1;i<7-lastDay;i++){
    dates.push({
      date:i,
      isToday:false,
      isDisabled: true,

    });

  }
console.log(dates);
}


getCalendarTail();
// getCalendarHead();
// getCalendarBody();
}