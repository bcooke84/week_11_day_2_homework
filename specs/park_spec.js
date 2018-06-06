const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;
  let park;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur("Velociraptor", 4);
    dinosaur2 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur3 = new Dinosaur("Triceratops", 1);
    dinosaur4 = new Dinosaur("Triceratops", 3);
    dinosaur5 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur6 = new Dinosaur("Velociraptor", 1);
  })

  it('should be empty at start', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('should increase in enclosure size when dinosaur added', function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('should remove all dinosaurs of a specific type', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.removeDinosaurByType("Triceratops");
    assert.strictEqual(park.enclosure.length, 4);
  })

  it('should return all dinosaurs with offspring greater than 2', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    newArray = park.getDinosaursWithOffspringCountOf2OrMore();
    assert.strictEqual(newArray.length, 3);
  })

  it('should calculate how many dinosaurs in the park after year one - 1 dinosaur', function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.getDinosaursAfterSetNumberOfYears(1), 5);
  })

  it('should calculate how many dinosaurs in the park after year two - 1 dinosaur', function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.getDinosaursAfterSetNumberOfYears(2), 25);
  })

  it('should calculate how many dinosaurs in the park after year two - 2 dinosaurs', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.getDinosaursAfterSetNumberOfYears(2), 41);
  })

});
