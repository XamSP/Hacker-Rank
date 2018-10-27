function minMax(arr){
    let arrSorted = arr.sort((a,b)=>a-b)
    return [arrSorted[0],arrSorted[arr.length-1]]; // fix me!
  }

minMax([5,58,1,28,100,67])  