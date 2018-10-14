function solve(n){
    if(n%2 == 0){
       return (n/2).toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))*2
    } else {
      return ((n-1)/2).toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))*2+1 
    }
 }
 
 solve(333)