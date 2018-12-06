function birthday(s, d, m) {
    let result = 0;

    console.log(s)
    s.forEach((ele, index) => { 
        console.log(`${index} index1`)
            s.slice(index, index + m).reduce((sum, num, i) => {
            console.log(`${index} index2`)
            if (i + 1 === m && sum + num === d) {
                result++;
            }
            return sum + num
        },0)
    })
    return result
}

birthday([1, 2, 1, 3, 2,], 3, 2)