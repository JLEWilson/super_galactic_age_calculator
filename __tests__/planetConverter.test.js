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

  test('calculateAge should pass a string into a map, and return the map keys value multiplied by planetConverter.person.age', () => {
    expect(planetConverter.calculateAge("mercury")).toEqual(6.24);
  });
});
