function plusMinus(arr) {
    let zero = 0;
    let plus = 0;
    let minus = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0){
            zero++;
        } else if (arr[i] < 0) {
            minus++;   
        } else {
            plus++;
        }
    }
    //maybe I'll use switch statement later
    console.log(Math.round ((plus/arr.length)*100000)/100000)
    console.log(Math.round ((minus/arr.length)*100000)/100000)
    console.log(Math.round ((zero/arr.length)*100000)/100000)
}