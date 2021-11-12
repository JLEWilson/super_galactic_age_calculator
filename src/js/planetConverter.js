export default class PlanetConverter{
  constructor(person){
    this.person = person;
    this.conversions = new Map(
      [
        ["mercury", 0.24],
        ["venus", 0.62],
        ["mars", 1.88],
        ["jupiter", 11.86],
        ["saturn", 29.457],
        ["uranus", 84.3],
        ["neptune", 164.8],
      ]
    );
  }

  calculateAge(planet){
    
  }
}
