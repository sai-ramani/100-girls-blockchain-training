// Write a program to iterate from 1 to 100 and print them such that if a number is divisible by 3 print "Fizz" if it is divisibel by 5 print "Buzz" if it is divisible by both print "FizzBuzz"
for(var i=1;i<=100;i++){
    if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}
