function angryProfessor(k, a) {
    let onTimeStudents = a.filter((student)=>{return student <= 0})

    return (onTimeStudents.length >= k)
        ? "NO" 
        : "YES"
        
}

angryProfessor(3, [1, 2, 0, -5, 4, -8, 7])