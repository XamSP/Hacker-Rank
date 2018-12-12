function dayOfProgrammer(year) {
    let calender = year > 1917 ? "gregorian" : "julian";
    let dd; let leapYear = 0;

    if (year == 1918) {
        return "26.09.1918"

    } else if (calender === "gregorian") {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {leapYear++}
        dd = 13 - leapYear; 

    } else {
        if (year % 4 === 0) {leapYear++}
        dd = 13 - leapYear;
    }

    return `${dd}.09.${year}`
}

dayOfProgrammer(2220)

dayOfProgrammer(1920)