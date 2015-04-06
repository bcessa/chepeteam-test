/**
 * @module
 * @author Chepeteam
 * @version 0.1.0
 * @license MIT
 * @description Sample module to provide general background and information;
 *              it's not meant to do anything useful.
 */

// Enable strict syntax mode
'use strict';

/**
 * Dummy dog representation
 * @constructor
 * @param {string} name - Name of the dog, optional
 * @param {string} race - Race of the dog, optional
 * @example var myPet = new Dog( 'bolt' );
 */
function Dog( name, race ) {
  /** 
   * @member {string} - Dog's name
   * @default 'doggy'
   */
  this.name = name || 'doggy';
  
  /** 
   * @member {int} - Dog's age in years
   * @default 1
   */
  this.age = 1;
  
  /** 
   * @member {int} - Dog's weight in kg
   * @default 1
   */
  this.weight = 1;
  
  /**
   * @member {string} - Dog's race
   * @default 'chihuahua'
   */
  this.race = race || 'chihuaha';
}

/**
 * Make the dog bark
 * @returns {string}
 */
Dog.prototype.bark = function() {
  return 'guau, guau!';
}

/**
 * Make the dog eat some food, this will increment it's weight in 10%
 * @param {int} amountOfFood - The quantity of food to consume
 */
Dog.prototype.eat = function( amountOfFood ) {
  this.weight += amountOfFood * 0.10;
}

/**
 * Accesor method for the dog's weight property
 * @returns {float} - The actual dog weight
 */
Dog.prototype.getWeight = function() {
  return this.weight;
}

Dog.prototype.poo = function() {
  this.weight -= ( this.weight * 0.05 );
}

/**
 * Generate a JSON representation of the dog
 * @returns {string}
 */
Dog.prototype.info = function() {
  return JSON.stringify( this );
}

/**
 * Dog constructor
 */
module.exports = Dog;