var Dog = require( './dog' );

var pet = new Dog( 'bolt' );
pet.eat( 2 );
pet.play();
console.log( pet.play() );
console.log( pet.bark() );
console.log( pet.info() );
pet.poo();
console.log( pet.fly() );
console.log( pet.info() );
console.log( typeof JSON.parse( pet.info() ) === 'object'  );
console.log( pet.getWeight() );