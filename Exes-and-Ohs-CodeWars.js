function XO(str) {
    let regex = /[xo]/ig  
    if(!str)
      return true
    let arr = str.toLowerCase().match(regex).sort()
    if(arr.length % 2 !== 0 || arr[arr.length/2] == arr[arr.length/2 -1]){
      return false
    }
    return true
}

XO("xoxSloxLoXppO");
