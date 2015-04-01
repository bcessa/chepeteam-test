var _   = require( 'underscore' );
var Dog = require( './dog' );

var pet = new Dog( 'bolt' );
pet.eat( 2 );
console.log( pet.bark() );
console.log( pet.info() );
console.log( _.isObject( JSON.parse( pet.info() ) ) );
console.log( pet.getWeight() );