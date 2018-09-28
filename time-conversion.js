function timeConversion(s) {
    const regex = /(\d{2}):(\d{2}):(\d{2})([A-Za-z][A-Za-z])/;
    let match = regex.exec(s);
    let hh = parseInt(match[1]);
    let mm = match[2];
    let ss = match[3];
    let pam = match[4];
    if (pam == "PM" && hh != 12) {
        hh += 12;
    } else if (pam == "AM" && hh == 12) {
        hh = "00";
    } 
    if (hh < 10 && hh != 0) {
        hh = `0${hh}`;
    }
    return `${hh}:${mm}:${ss}`;
}