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
   * @member {int} - Dog's happiness
   * @default 100
   */
  this.happiness = 100;
  
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

  /** 
   * @member {int} - Dog's rest in points
   * @default 20
   */
  this.rest = 20;

  /** 
   * @member {int} - Dog's happiness in points
   * @default 100
   */
  this.happiness = 100;
}

/**
 * Make the dog bark
 * @returns {string}
 */
Dog.prototype.bark = function() {
  return 'guau, guau!';
};

/**
 * Make the dog eat some food, this will increment it's weight in 10%
 * @param {int} amountOfFood - The quantity of food to consume
 */
Dog.prototype.eat = function( amountOfFood ) {
  this.weight += amountOfFood * 0.10;
};

/**
 * Accesor method for the dog's weight property
 * @returns {float} - The actual dog weight
 */
Dog.prototype.getWeight = function() {
  return Math.round( this.weight * 100) / 100;
};

/**
 * Make dog to the bathroom; it will lost 5% of weight by default
 */
Dog.prototype.poo = function() {
  this.weight -= ( this.weight * 0.05 );
};

/**
 * Metodo para acceder a la varibale happiness  
 * @returns {int} - The actual dog happiness
 */
Dog.prototype.getHappiness = function() {
  return this.happiness;
};

/**
 * Hace al perro volar; this.happiness += 20; this.rest -= 10;
 * @returns {string}  - The actual dog happiness
 */
Dog.prototype.fly = function() {
  if( this.rest<20 ) {
    return 'Sorry!, No tienes suficiente descanso para volar.';
  } else {
    this.happiness += 20;
    this.rest -= 10;
    return 'Acabas de hacer un vuelo, nivel de felicidad es: ' + this.happiness;
  }
};

/**
 * Make dog to play; it increase the level of happiness 5 points
 * @returns {int} - happiness value
 */
 Dog.prototype.play = function() {
   this.happiness += 5;
   return this.happiness;
 };

/**
 * Generate a JSON representation of the dog
 * @returns {string}
 */
Dog.prototype.info = function() {
  return JSON.stringify( this );
};

/**
 * Dog constructor
 */
module.exports = Dog;