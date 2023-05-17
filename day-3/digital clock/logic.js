function date(){
  var today = new Date();
  var day = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth();
  let date = month + "-" + day + "-" + year;
  document.getElementById("date").innerHTML = date;
}
function quote_of_the_day(){
  var today= new Date();
  let day = today.getDay();
  var quote = "";
  switch(day){
    case 0: quote = "A sunday well spent brings a week of content.";
    break;
    case 1: quote = "It's Monday time to sparkle and shine.";
    break;
    case 2: quote = "Happy Tuesday. Stay positive. Saying YES to HAPPINESS leaves no room for STRESS!";
    break;
    case 3: quote = "It's Wednesday, Let it put a rainbow into your life.";
    break;
    case 4: quote = "Each day is a new beginning, so take full advantage of this Thursday.";
    break;
    case 5: quote = "Each day is a new beginning, so take full advantage of this Thursday.";
    break;
    case 6: quote = "It’s Saturday, be kind to yourself.";
    break;
  }
  document.getElementById("head").innerHTML = quote;
}
function digi_clock(){
  var today= new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var mer = "AM"
  if(hours > 12){
    hours -= 12;
    mer = "PM";
  }
  if(hours == 0){
    hours = 12;
    mer = "AM";
  }
  if(hours < 10){
    hours = "0"+hours;
  }
  if(minutes < 10){
    minutes = "0"+minutes;
  }
  if(seconds < 10){
    seconds = "0"+seconds;
  }
  var curr = hours + ":" + minutes + ":" + seconds + " "+mer;
  document.getElementById("time").innerHTML = curr;
  console.log(curr);
  setTimeout(function() {digi_clock()}, (2000));
}
