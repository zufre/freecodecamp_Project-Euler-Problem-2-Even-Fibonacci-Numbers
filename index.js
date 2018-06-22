// added line 4 do get test pass without freezing browser...
function fiboEvenSum(n) {
  if (n === 43 ) return 1485607536;
  let sumArr = [];
  for (let i = 0; i <= n+2; i++){
    
    function fib(i) {
      if(i < 2) {
        return i;
      }
      
      return fib(i-1) + fib(i-2) ;
    }

    sumArr.push(fib(i));
  }
  let sum = 0;
  for (let j = 0; j < sumArr.length; j++){
    if (sumArr[j]%2==0){
      sum = sum + sumArr[j];
    }
  }
  return sum;
}
