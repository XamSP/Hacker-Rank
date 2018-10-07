function doubleHashStairs(num) {
    for (let i=1; i <= num; i++) {
      let arr = [];
      for(y=0; y < num; y++) {
        if (y == 0) {
          arr.push('#')
        } else if (y >= i) {
          arr.push(" ")
          arr.unshift(" ")
        } else {
          arr.push("#");
          arr.unshift("#");
        }
      }
      console.log(arr.join(""))
    } 
  }
  
  function doubleHashStairs2(num) {
    for (let i= 0; i < num; i++) {
      let arr = ["#"];
      arr.push("#".repeat(i));
      arr.unshift("#".repeat(i));
      arr.push(" ".repeat(num - i-1))
      arr.unshift(" ".repeat(num - i-1))
      console.log(arr.join(""))
    }
  }
  
  doubleHashStairs(3)

  doubleHashStairs2(5)