function Cat(name) {
  this.name = name;
}

Cat.prototype.eat

function Bear(name) {
  this.name = name;
}

Bear.prototype.eat

function Animal() { }

Animal.prototype = {
  constructor: Animal,
eat: function() {
    console.log("nom nom nom");
  }
};
