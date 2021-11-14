export default class PlanetConverter{
  constructor(person){
    this.person = person;
    this.conversions = new Map(
      [
        ["mercury", 0.24],
        ["venus", 0.62],
        ["earth", 1],
        ["mars", 1.88],
        ["jupiter", 11.86],
        ["saturn", 29.457],
        ["uranus", 84.3],
        ["neptune", 164.8],
      ]
    );
  }

  calculateAge(planet){
    const ageInDays = this.person.age * 365.24;
    const planetYearLength = this.conversions.get(planet) * 365.24;
    const ageInPlanetYears = ageInDays / planetYearLength;
    return parseFloat(ageInPlanetYears.toFixed(2));
  }

  calculateYearsRemaining(planet){
    const ageInDays = this.person.yearsRemaining * 365.24;
    const planetYearLength = this.conversions.get(planet) * 365.24;
    const ageInPlanetYears = ageInDays / planetYearLength;
    return parseFloat(ageInPlanetYears.toFixed(2));
  }
}
