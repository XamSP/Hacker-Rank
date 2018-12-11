function viralAdvertising(n) {
    // n = days; 
    let likes = 2;
    let newLiked = 2;

    for (let i = 1; i < n; i++) {
        likes += Math.floor(newLiked * 3 / 2)
        newLiked = Math.floor(newLiked * 3 / 2)     
    }

    return likes
}

viralAdvertising(8)