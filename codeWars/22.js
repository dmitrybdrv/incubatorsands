Pythagorean Triple
function isPythagoreanTriple(integers) {
   if (Math.pow(integers[0], 2) + Math.pow(integers[1], 2) === Math.pow(integers[2], 2)) {
        
               return true
            } else if (Math.pow(integers[1], 2) + Math.pow(integers[2], 2) === Math.pow(integers[0], 2)) {
               
                return true
            } else if (Math.pow(integers[2], 2) + Math.pow(integers[0], 2) === Math.pow(integers[1], 2)) {
               
                return true
            } else return false
}


Invert values

function invert(array) {
        let myArr = []

        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                array[i] = array[i] * (-1)
                myArr.push(array[i])
            } else if (array[i] < 0) {
                array[i] = Math.abs(array[i])
                myArr.push(array[i])
            } else if (array[i] === 0) {
              array[i] = -0
                myArr.push(array[i])
            }

        }
        return myArr
}