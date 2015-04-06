// Enable strict syntax mode
'use strict';

var expect = require( 'chai' ).expect;
var Dog    = require( '../dog' );
var pet    = new Dog( 'bolt' );

// global describe
describe( 'Dog', function() {
  it( 'should bark', function() {
    expect( pet.bark() ).to.equal( 'guau, guau!' );
  });
  
  it( 'should eat', function() {
    pet.eat( 1 );
    expect( pet.getWeight() ).to.equal( 1.1 );
  });
  
  it( 'should provide accurate info', function() {
    expect( JSON.parse( pet.info() ) ).to.be.an( 'object' );
  });
  
  it( 'should be able to poo', function() {
    pet.poo();
    expect( pet.getWeight() ).to.equal( 1.05 );
  });

  it('should be able to sleep', function(){
    pet.sleep();
    expect( pet.getRest() ).to.equal( 25 );
  });
  
  it( 'should to play', function() {
    expect( pet.play() ).to.equal( 105 );
  });
});