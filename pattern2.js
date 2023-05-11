// write a program to print pattern below
/*    *****
      ****
      ***
      **
      *
*/
for(var i=5;i>=1;i--){
    s = '';
    for(var j=1;j<=i;j++){
        s += '*';
    }
    console.log(s);
}
