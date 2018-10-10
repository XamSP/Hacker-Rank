function repeater(string, n){
    let arr = [];
    
    for(let i =0; i < n; i++) {
      arr.push(string);
    }
    return arr.join("")
}

repeater("up");