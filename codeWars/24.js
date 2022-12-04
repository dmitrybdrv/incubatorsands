
Grasshopper - Debug sayHello


function sayHello(name) {
  return  `${'Hello'}, ${name}`
}




How many lightsabers do you own?


function howManyLightsabersDoYouOwn(name) {
  if(name) {
    if(name === "Zach") {
      return 18
    } else if (name !== "Zach" || !name || name === undefined) {
      return 0
    }
  }
  return 0
}