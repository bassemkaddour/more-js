var talkingCalendar = function(date) {
  var year = date.slice(0, 4);
  var month = monthKey[date.slice(5,7)];
  var day = date.slice(8).replace("0", "");
  day += daySuffix(day);
  return month + " " + day + ", " + year;
};

var monthKey = {
  '01':"January",
  '02':"February",
  '03':"March",
  '04':"April",
  '05':"May",
  '06':"June",
  '07':"July",
  '08':"August",
  '09':"September",
  '10':"October",
  '11':"November",
  '12':"December"
};

function daySuffix(day) {
  if (day == '1' || day == '21' || day == '31') {
    return 'st';
  } else if (day == '2' || day == '22') {
    return 'nd';
  } else if (day == '3' || day == '23') {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1900/05/03"));
console.log(talkingCalendar("1999/03/31"));