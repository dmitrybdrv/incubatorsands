How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let severalPoint = 0
    let finalPoint;
    for (let i = 0; i < classPoints.length; i++) {
        finalPoint = severalPoint += classPoints[i]
    } if (finalPoint/classPoints.length < yourPoints) {
        return true
    } else return false
}