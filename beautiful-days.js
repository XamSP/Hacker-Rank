function beautifulDays(i, j, k) {
    let movieDays = 0;

    for (i; i <= j; i++) {
        let cal = Math.abs(i - parseInt(i.toString().split("").reverse().join(""))) / k
        if (Number.isInteger(cal)) { movieDays++ }            
    }

    return movieDays
}

beautifulDays(15, 21, 3)