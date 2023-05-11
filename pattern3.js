// write a program to print the below pattern
/*      *
       ***
      *****
     *******
    *********
*/
for(var i=1;i<=9;i+=2){
    s = '';
    for(var j=1;j<=(9-i)/2;j++){
        s += ' ';
    }
    for(var j=1;j<=i;j++){
        s += '*';
    }
    console.log(s);
}
