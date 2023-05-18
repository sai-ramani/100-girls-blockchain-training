res = '';
function display(val){
  if(val == 'del'){
    res = '';
  }
  else if(val == '<-'){
    res = res.slice(0,res.length - 1);
  }
  else if(val == '='){
    res = eval(res).toString();
  }
  else{
    res += val;
  }
  document.getElementById("box").innerHTML = res;
} 