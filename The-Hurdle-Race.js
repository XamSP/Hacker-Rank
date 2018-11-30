function hurdleRace(k, height) {
    let sortedHeights = height.sort((a,b)=>{return a - b})
    //console.log(sortedHeights)
    if (sortedHeights[sortedHeights.length - 1] >= k)
        return sortedHeights[sortedHeights.length - 1] - k; 

    return 0 
}

hurdleRace(5, [5, 6, 1, 3, 6])