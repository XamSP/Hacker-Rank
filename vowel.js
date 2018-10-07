function vowel(str) {
    let regex = str.match(/[aeiou]/gi); 
    return (regex) ?  regex.length :  0;
  }
  
vowel("aoppei");