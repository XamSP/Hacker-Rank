function birthdayCakeCandles(ar) {
    let obj = {
        max: 0,
        mode: 0,
    }
    
    for (let i=0; i < ar.length; i++) {
        if (obj.max < ar[i]) {
            obj.max = ar[i];
            obj.mode = 1;
            //console.log(obj.max)
        } else if (obj.max == ar[i]) {
            obj.mode ++;
        } else {
            //nothing
        }
    }

    return obj.mode;
}