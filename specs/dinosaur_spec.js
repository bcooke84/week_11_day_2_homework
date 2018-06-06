const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  // let dinosaur;

  // beforeEach(function() {
  //   dinosaur = new Dinosaur("Tyrannosaurus", 2);
  // })

  it('should have a type', function() {
    var dinosaur = new Dinosaur("Tyrannosaurus", 2);
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  })

  it('should have a number of offspring per year', function() {
    var dinosaur = new Dinosaur("Tyrannosaurus", 2);
    assert.strictEqual(dinosaur.offspringPerYear, 2);
  })


});
