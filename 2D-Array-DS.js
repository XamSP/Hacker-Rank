function hourglassSum(arr) {
    let highNum;;
  
    for (let i = 0; i < arr[0].length; i++) {
      //console.log(i)
      let sumArr1 = arr[0][i] + arr[0][i+1] + arr[0][i+2]
      let sumArr2 = arr[1][i+1]
      let sumArr3 = arr[2][i] + arr[2][i+1] + arr[2][i+2]
      let allSum = sumArr1 + sumArr2 + sumArr3
      if (highNum < allSum || highNum === undefined) {
          highNum = allSum;
          console.log(`the new highNum is ${highNum}!`)
        }
  
      if (i == arr.length-1 && arr.length > 3) {
        i = -1
        arr.splice(0,1)
        console.log(arr) //to check if the arr is spliced
      }
    
    }
  
    return highNum
  }
  
  hourglassSum([ 
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
    ]);
  
  hourglassSum([ 
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 9, 2, -4, -4, 0 ],
    [ 0, 0, 0, -2, 0, 0 ],
    [ 0, 0, -1, -2, -4, 0 ] 
    ]);
  
  