function migratoryBirds(arr) {

    let obj = {};

    let bigNum;

    arr.map((birdId) => {
        if (!obj[birdId]) { obj[birdId] = 0 }
        obj[birdId]++;
    })

    Object.keys(obj).forEach((birdId, index) => {
        if (index === 0) { bigNum = birdId } 
        if (obj[birdId] === obj[bigNum] && birdId < bigNum ) {
            bigNum = birdId
        } else if (obj[birdId] > obj[bigNum]) {
            bigNum = birdId
        }
    })

    return bigNum
}

migratoryBirds([0, 6, 8, 1, 9, 1, 1, 0])