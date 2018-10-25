function getCount(str) {
    //   Solution 1
    let regex = /[aeiou]/ig
    let vowelsCount = str.match(regex);
    
    if(!vowelsCount)
    return 0
    
    return vowelsCount.length;
}

function getCount2(str) {
    //  Solution 2
    let regex = /[aeiou]/i
    return [...str].filter((x)=>regex.test(x)).length
}

getCount("apoirewhebiu")

getCount2("apoirewhebiu")