//Divide and Conquer

function divCon(x){
let num = []
let str = []

  x.forEach( i => {
    if( i === Number(i) ) {
      num.push(i)
    }
  })
    num = num.reduce((acc, el) => {
    return acc + el
  }, 0)
  x.forEach( i => {
    if( i !== Number(i) ) {
      str.push(i)
    }
  })
    str = str.reduce((acc, el) => {
    return acc + Number(el)
  }, 0)
  
  const result = num-str
  
  return result
}