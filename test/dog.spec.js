// Enable strict syntax mode
'use strict';

var expect = require( 'chai' ).expect;
var Dog    = require( '../dog' );
var pet    = new Dog( 'bolt' );

// global describe
describe( 'Dog', function() {
  it( 'should bark', function() {
    var expected  = 'guau, guau!';
    var bark = pet.bark();
    expect( bark ).to.equal( expected );
  });
  
  it( 'should eat', function() {
    pet.eat( 1 );
    expect( pet.getWeight() ).to.equal( 1.1 );
  });
  
  it( 'should provide accurate info', function() {
    expect( JSON.parse( pet.info() ) ).to.be.an( 'object' );
  });
});