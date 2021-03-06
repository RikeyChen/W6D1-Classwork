Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject (name) {
  this.name = name;
}

MovingObject.prototype.soar = function() {
  // this.name.bind(this)
  return `${this.name} soars!`;
};

function Ship (name) {
  MovingObject.call(this, name);
}
Ship.inherits(MovingObject);

function Asteroid (name) {
  MovingObject.call(this, name);
}
Asteroid.inherits(MovingObject);

let a = new Asteroid("rocky");

console.log(a.soar());