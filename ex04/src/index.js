// Only change code below this line 
function sumFibonacci(num) {
    var a = 1, b = 0, temp, suma=0;
    var num1=num;
  while (num >0){
    temp = a;
    if(a%2!==0 && a<=num1)
        suma+=a;
    a = a + b;
    b = temp;
    num--;
  }

  return suma;
  
}



// Only change code above this line 
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));


module.exports=sumFibonacci;