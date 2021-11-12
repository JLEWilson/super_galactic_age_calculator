import PlanetConverter from '../src/js/planetConverter';
import Person from '../src/js/person';

describe('PlanetConverter', () => {
  
  test('should create a planet object that contains a personObject and a map of planet year conversions', () =>{
    let healthyMale = new Person(26, "male", 62, 130, false, 1);
    const planetConverter = new PlanetConverter(healthyMale);
    expect(planetConverter.person.age).toEqual(26);
  });
});
