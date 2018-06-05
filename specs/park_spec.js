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
    dinosaur1 = new Dinosaur("Velociraptor", 1);
    dinosaur2 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur3 = new Dinosaur("Triceratops", 4);
    dinosaur4 = new Dinosaur("Triceratops", 3);
    dinosaur5 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur6 = new Dinosaur("Velociraptor", 4);
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
    park.removeDinosaurByType("Tyrannosaurus");
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

});
