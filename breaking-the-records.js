function breakingRecords(scores) {
    let objScore = {
        maxCount: 0,
        minCount: 0,
        max: scores[0],
        min: scores[0]
    };
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < objScore.min) {
            objScore.min = scores[i];
            objScore.minCount ++;
            console.log(objScore,i)
        } else if (scores[i] > objScore.max) {
            objScore.max = scores[i];
            objScore.maxCount ++;
            console.log(objScore,i)
        } else {
            //nothing
            console.log(objScore,i)
        }
    }
   // console.log(`${objScore.maxCount} ${objScore.minCount}`);
    return [objScore.maxCount, objScore.minCount]
}