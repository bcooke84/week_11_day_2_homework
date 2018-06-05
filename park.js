const Dinosaur = require('./dinosaur.js');

const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function(type) {
  for (var i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].type === type) {
      this.enclosure.splice(i, 1);
      i--;
    }
  }
}

Park.prototype.getDinosaursWithOffspringCountOf2OrMore = function() {
  const dinoArray = [];
  for(var dinosaur of this.enclosure) {
    if(dinosaur.numberOfOffspringPerYear >= 2) {
      dinoArray.push(dinosaur);
    }
  }
  return dinoArray;
}



module.exports = Park;
