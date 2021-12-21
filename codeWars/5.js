Student's Final Grade

function finalGrade (exam, projects) {
    let finalScore;
if (exam > 90 || projects > 10) {
    finalScore = 100
} else if (exam > 75 && projects >= 5) {
    finalScore = 90
} else if (exam > 50 && projects >= 2) {
    finalScore = 75
} else  {finalScore = 0}
    return finalScore;
}