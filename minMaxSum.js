function miniMaxSum(arr) {
    let thisObj = {
        min : arr[0],
        max : arr[0],
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < thisObj.min && arr[i] > thisObj.max){
            thisObj.min = arr[i]; thisObj.max = arr[i];
        } else if (arr[i] > thisObj.max){
            
            thisObj.max = arr[i];
        } else if (arr[i] < thisObj.min){
            thisObj.min = arr[i];
        } else {
            //nothing
        }
    }
    //Min & Max
    console.log(arr.reduce((acc, num)=>{return acc+num}, 0) - thisObj.max, arr.reduce((acc, num)=>{return acc+num}, 0) - thisObj.min)
}