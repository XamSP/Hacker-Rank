function anagrams(str1, str2) {
    let regex = /[^\w]/g 
    let str1d = str1.replace(regex, "").toLowerCase()
    let str2d = str2.replace(regex, "").toLowerCase()
  
    if (str1d.length !== str2d.length){
      return false
    }
    
    let objMatch = {}
  
    for (let i = 0; i < str1d.length; i++) {
      if(!objMatch[str1d[i]]) {
        objMatch[str1d[i]] = 1;  
      } else {
        objMatch[str1d[i]] +=1 
      }
  
        if(!objMatch[str2d[i]]) {
        objMatch[str2d[i]] = -1;  
      } else {
        objMatch[str2d[i]] -=1 
      }
    } 
  
    for (var key in objMatch) {
      if(objMatch[key] !==0) {
      return false
    }
    //console.log(key, objMatch[key]);
    }
    return true
  }
  
  anagrams("Whoa! Hi!", "Hi! Whoa!")