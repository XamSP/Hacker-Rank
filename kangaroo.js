function kangaroo(x1, v1, x2, v2) {
    let slowKangaroo;
    let fastKangaroo;

    if (x1 + v1 === x2 + v2) {
        return "YES"
    } else if (v1 > v2) {
        fastKangaroo = {spd: v1, loc: x1}
        slowKangaroo = { spd: v2, loc: x2 }
    } else {
        fastKangaroo = { spd: x2, loc: x2 }
        slowKangaroo = { spd: v1, loc: x1 }
    }

    do {
        fastKangaroo.loc += fastKangaroo.spd 
        slowKangaroo.loc += slowKangaroo.spd 

        if (fastKangaroo.loc > slowKangaroo.loc) {
            console.log('lol')
            return "NO"
        } else if (fastKangaroo.loc === slowKangaroo.loc) {
            console.log('lol')
            return "YES"
        }
    } while (fastKangaroo.loc < slowKangaroo.loc)
}

kangaroo(0, 3, 4, 2)