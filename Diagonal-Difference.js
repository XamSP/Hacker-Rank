function diagonalDifference(arr) {
    let rightDiag = arr.reduce((sum, num, index) => { 
        return sum + num[index]
    },0)
    let leftDiag = arr.reduce((sum, num, index) => {
        return sum + num[arr.length-index-1]
    }, 0)
    // console.log(arr)
    // console.log(rightDiag)
    // console.log(leftDiag)
    return Math.abs(rightDiag - leftDiag)
}

diagonalDifference([[2,4,5,1,23], [4,4,1,1,7], [0,4,2,1,13], [1,42,5,1,23]])