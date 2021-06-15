'use strict';

console.clear();//コンソールログを初期化。リロードでもいいが、今回は紹介程度？

{
const year = 2020;
const month =4;//5


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

getCalendarBody();
}