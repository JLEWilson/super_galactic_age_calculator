import Person from '../src/js/person';

describe('Person', () => {

  let healthyMale;
  let healthyFemale;

  beforeEach(() => {
    healthyMale = new Person(26, "male", 62, 130, false, 1);
    healthyFemale = new Person(26, "female", 60, 115, false, 1);
  });

  test('should correctly create a person object with an age property', () => {
    const person = new Person(26);
    expect(person.age).toEqual(26);
  });

  test('should correctly create a person object with age, sex, height, weight, isSmoker, and drinksPerWeek properties', () => {
    expect(healthyMale.age).toEqual(26);
    expect(healthyMale.sex).toEqual("male");
    expect(healthyMale.height).toEqual(62);
    expect(healthyMale.weight).toEqual(130);
    expect(healthyMale.isSmoker).toEqual(false);
    expect(healthyMale.drinksPerWeek).toEqual(1);
  });
    

  test('calculateLifeExpectancy method should calculate expected life duration based on sex property and set outcome as lifeExpectancy property', () => {
    expect(healthyMale.lifeExpectancy).toEqual(76.1);
    expect(healthyFemale.lifeExpectancy).toEqual(81.1);
  });

  test('calculateLifeExpectancy method should also calculate expected life duration based on height being above 62 inches', () => {
    const tallPerson = new Person(26, "male", 75, 175, false, 1); // height above range for negative longevity
    expect(tallPerson.lifeExpectancy).toBeLessThan(76.1);
  });

  test('calculateLifeExpectancy method should also calculate expected life duration based on weight, seeing if bmi is under healthy range', () => {
    const underWeightMale = new Person(26, "male", 62, 60, false, 1); 
    const underWeightFemale = new Person(26, "female", 60, 60, false, 1);
    expect(underWeightMale.lifeExpectancy).toBeLessThan(76.1);
    expect(underWeightFemale.lifeExpectancy).toBeLessThan(81.1);
  });

  test('calculateLifeExpectancy method should also calculate expected life duration based on weight, seeing if bmi is over healthy range', () => {
    const overWeightMale = new Person(26, "male", 62, 500, false, 1); 
    const overWeightFemale = new Person(26, "female", 60, 500, false, 1);
    expect(overWeightMale.lifeExpectancy).toBeLessThan(76.1);
    expect(overWeightFemale.lifeExpectancy).toBeLessThan(81.1);
  });

  test('calculateLifeExpectancy method should deduct years if Person isSmoker', () => {
    const smokingPerson = new Person(26, "male", 62, 130, true, 1);
    expect(smokingPerson.lifeExpectancy).toBeLessThan(76.1);
  });

  test('calculateLifeExpectancy method should deduct .5 years if Person drinks more than 7 but less than 14 adult beverages per week', () => {
    const drinkingPerson = new Person(26, "male", 62, 130, false, 8);
    expect(drinkingPerson.lifeExpectancy).toEqual(75.6);
  });

  test('calculateLifeExpectancy method should deduct 1.5 years if Person drinks more than 14 but less than 25 adult beverages per week', () => {
    const drinkingPerson = new Person(26, "male", 62, 130, false, 15);
    expect(drinkingPerson.lifeExpectancy).toEqual(74.6);
  });

  test('calculateLifeExpectancy method should deduct 4.5 years if Person drinks more than 25 adult beverages per week', () => {
    const drinkingPerson = new Person(26, "male", 62, 130, false, 28);
    expect(drinkingPerson.lifeExpectancy).toEqual(71.6);
  });

  test('calculateYearsRemaining should return life expectancy - age rounded to tenths place and set it as yearsRemaining', () => {
    expect(healthyMale.yearsRemaining).toEqual(50.1);
  });

  test('calculateYearsExceeded should return 0 if yearsRemaining is > 0 and set it as a the yearsExceededExpectancy property of Person', () => {
    expect(healthyMale.yearsExceededExpectancy).toEqual(0);
  });

  test('calculateYearsExceeded should return the inverse of yearsRemaining if yearsRemaining is < 0 ')
  expect(healthyMale.yearsExceededExpectancy).toGreaterThan(0);
});