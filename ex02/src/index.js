// Only change code below this line 
function myCounter(n) {
    if(n<1)
        return [];
    else{
        const myArray=myCounter(n-1);
        myArray.unshift(n);
        return myArray;
    }
  
  
}



// Only change code above this line 
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));


module.exports=myCounter;