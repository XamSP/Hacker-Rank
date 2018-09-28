function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // range between  fruit > s && fruit < t
        let appleHits = 0;
        let orangeHits = 0;
        
        for (let i = 0; i < apples.length + oranges.length; i++) {
            if (apples[i]+a >= s && apples[i]+a <= t) {
                appleHits++;
            } 
                
            if (oranges[i]+b >= s && oranges[i]+b <= t) {
                orangeHits++;
            }    
        }
        
        console.log(appleHits);
        console.log(orangeHits);
}