function sockMerchant(n, ar) {
    let pairs = 0;
    let obj = {};

    ar.map((sockNum) => {
        if (!obj[sockNum]) {
            obj[sockNum] = 0
        }
        if ((obj[sockNum] + 1) % 2 === 0) {pairs++}

        obj[sockNum] = (obj[sockNum] + 1) % 2;

    })
    console.log(obj);
    return pairs
    // return Object.values(obj).reduce((sum, num) => {
    //     return sum + num;
    //  },0)
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])