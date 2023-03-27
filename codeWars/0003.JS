//Credit Card Mask
 

function maskify(cc) {
let hide = cc.split('')
  for(let i =0; i<hide.length-4; i++) {
    if(hide[i]) {
      hide[i] = '#'
    }
  }
  return hide.join('')
}