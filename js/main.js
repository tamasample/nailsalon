
$(window).on('load',function(){$(function(){
  var moveNav = $('nav');
  offset = moveNav.offset().top;

  $(window).scroll(function(){
if($(window).scrollTop() > offset){
  moveNav.addClass('fixed-nav');
}else{
  moveNav.removeClass('fixed-nav');
}
  });
});
});


//カレンダー

const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const config = {
  show: 2,
}

function showCalendar(year, month) {
  for (i = 0; i < config.show; i++) {
    const calenarHtml = createCalendar(year, month);
    const sec = document.createElement('div');
    sec.innerHTML = calenarHtml;
    document.querySelector('#calendar').appendChild(sec);

    month++
    if (month > 12) {
      year++
      month = 1
    }
  }
}

function createCalendar(year,month){
//月初め空白
let firstDate = new Date(year, month - 1, 1);
let lastDate = new Date(year, month, 0);

let htmlStr = "";

let table_title = year + "年" + month + "月";
htmlStr += "<p>" + table_title + "</p>";
htmlStr += "<table>";


//曜日
htmlStr += "<tr>";

for (let j = 0; j < weekdays.length; j++) {
    htmlStr += "<th>" + weekdays[j] + "</th>";
  }


htmlStr += "</tr>";
let startWeekDay = firstDate.getDay();

for (let m = 0; m < startWeekDay; m++) {
  htmlStr += "<td>-</td>";
}

//日付

for (let k = 1; k <= lastDate.getDate(); k++) {
  let date = new Date(year, month - 1, k);
  let weekDay = date.getDay();
  let cellStr = date.getDate();
  if (weekDay == 0) htmlStr += "<tr>";
  if (k == day && i == 0) {
    htmlStr += "<td class=\"today\">"
  } else {
    htmlStr += "<td>";
  }
  htmlStr += cellStr + "</td>";
  if (weekDay == 6) htmlStr += "</tr>";
}

//月末空白

let lastDayWeek = lastDate.getDay();
if (lastDayWeek != 6) {
  for (let w = lastDayWeek + 1; w <= 6; w++) {
    htmlStr += "<td>-</td>";
  }
  htmlStr +-"</tr>";
}
htmlStr += "</table>"
return htmlStr;
}
showCalendar(year,month);

