import PlanetConverter from '../src/js/planetConverter';
import Person from '../src/js/person';

describe('PlanetConverter', () => {
  
  let healthyMale;
  let planetConverter;

  beforeEach(() => {
    healthyMale = new Person(26, "male", 62, 130, false, 1);
    planetConverter = new PlanetConverter(healthyMale);
  });

  test('should create a planet object that contains a personObject and a map of planet year conversions', () => {
    expect(planetConverter.person.age).toEqual(26);
  });

  test('calculateAge should pass a string into objects conversions map, and return the map keys value*365.24 / person.age * 365 rounded to hundredths place', () => {
    expect(planetConverter.calculateAge("mercury")).toEqual(108.33);
  });

   test('calculateYearsRemaining should pass a string into objects conversions map, and return the map keys value*365.24 / 365 * planetConverter.person.yearsRemaining rounded to hundredths place', () => {
     expect(planetConverter.calculateYearsRemaining("mercury")).toEqual(208.75);
  });

  test('calculateYearsExceeded should pass a string into objects conversions map, and return the map keys value*365.24 / person.yearsRemaining * 365 rounded to hundredths place', () => {
    const oldMale = new Person(100, "male", 62, 130, false, 1);
    const planetConverter1 = new PlanetConverter(oldMale);
    expect(planetConverter.calculateYearsExceeded("mercury")).toEqual(0);
    expect(planetConverter1.calculateYearsExceeded("mercury")).toBeGreaterThan(0);
  });
  
});
