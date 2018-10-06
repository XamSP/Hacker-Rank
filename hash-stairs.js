function hashStairs(num) {
    for (let i=1; i <= num ; i++){
      let arr = [];
      
      for(let y=0; y < num; y++) {
        if (y < i) {
          arr.push("#"); 
        } else {
          arr.push(" ");
        }
      }
      console.log(arr.join(""))
    }
  }
  
   hashStairs(5)