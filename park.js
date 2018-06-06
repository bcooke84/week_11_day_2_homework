const Dinosaur = require('./dinosaur.js');

const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function(type) {
  for (let i = this.enclosure.length - 1; i >= 0; i--) {
    if (this.enclosure[i].type === type) {
      this.enclosure.splice(i, 1);
    }
  }
}

Park.prototype.getDinosaursWithOffspringCountOf2OrMore = function() {
  const dinoArray = [];
  for(let dinosaur of this.enclosure) {
    if(dinosaur.offspringPerYear >= 2) {
      dinoArray.push(dinosaur);
    }
  }
  return dinoArray;
}

Park.prototype.getDinosaursAfterSetNumberOfYears = function(numberOfYears) {
  dinoCount = 0;
  for (let dinosaur of this.enclosure) {
    dinoCount += (1 + dinosaur.offspringPerYear) ** numberOfYears;
  }
  return dinoCount;
}

module.exports = Park;
