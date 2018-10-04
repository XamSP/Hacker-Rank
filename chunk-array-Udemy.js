function chunky(arr, size) {
    let fatArrbert = [];
    for (let i=0; i <= arr.length -1; i += size) {
      fatArrbert.push(arr.slice(i, i+size));
      console.log(fatArrbert);
    }
    return fatArrbert;
  }
  
chunky([1,2,3,4,5], 2);