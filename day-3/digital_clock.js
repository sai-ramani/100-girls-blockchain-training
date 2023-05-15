function digi_clock(){
  var today= new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var mer = ""
  if(hours >= 12){
    hours -= 12;
    mer = "PM";
  }
  else if(hours == 0){
    hours = 0;
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
  var curr = hours + ":" + minutes + ":" + seconds;
  console.log(curr);
  setTimeout(function() {digi_clock()}, (3000));
}
digi_clock();
