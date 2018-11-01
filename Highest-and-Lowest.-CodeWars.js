function highAndLow(numbers) {
    let arrOfNums = numbers.split(" ").sort((a,b)=> parseInt(a)-parseInt(b));
    return `${arrOfNums[arrOfNums.length-1]} ${arrOfNums[0]}`
  }

  highAndLow('-1 10 5 -200 25 58 3 -8 6')  
  //expect  "58 -200"