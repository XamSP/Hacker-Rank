function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if(grades[i] < Math.round(grades[i]/5)*5 && grades[i] > 37) {
            roundedGrades.push(Math.round(grades[i]/5)*5);
            console.log(roundedGrades[i]);
        } else {
            roundedGrades.push(grades[i])
            console.log(roundedGrades[i]);
        }

    }
    return roundedGrades
}