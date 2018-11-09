function stringMerge(string1, string2, letter){
    let arr1 = [...string1]
    let arr2 = [...string2]
    let index1 = arr1.indexOf(letter);
    let index2 = arr2.indexOf(letter)
    return arr1.splice(0, index1).join("") + arr2.splice(index2, arr2.length).join("")
}

  stringMerge("apowiejfoiajsf","iwahfeijouh", "j")
