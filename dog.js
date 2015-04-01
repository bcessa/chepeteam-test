// Enable strict syntax mode
'use strict';

function Dog( name, race ) {
  this.name = name || 'doggy';
  this.age = 1;
  this.weight = 1;
  this.race = race || 'chihuaha';
}

Dog.prototype.bark = function() {
  return 'guau, guau!';
}

Dog.prototype.eat = function( amountOfFood ) {
  this.weight += amountOfFood * 0.10;
}

Dog.prototype.getWeight = function() {
  return this.weight;
}

Dog.prototype.info = function() {
  return JSON.stringify( this );
}

module.exports = Dog;