import { EXPORTDECLARATION_TYPES } from '@babel/types';
import {Person} from './../src/age_calculator';

describe('Person', () => {

  let healthyMale;
  let healthyFemale;

  beforeEach(() => {
    healthyMale = new Person(26, "male", 62, 160, false, 1);
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
    expect(healthyMale.weight).toEqual(160);
    expect(healthyMale.isSmoker).toEqual(false);
    expect(healthyMale.drinksPerWeek).toEqual(1);
  });
    

  test('calculateLifeExpectancy method should calculate expected life duration based on sex property and set outcome as lifeExpectancy property', () => {
    healthyMale.calculateLifeExpectancy();
    healthyFemale.calculateLifeExpectancy();
    expect(healthyMale.lifeExpectancy).toEqual(76.1);
    expect(healthyFemale.lifeExpectancy).toEqual(81.1);
  });

  test('calculateLifeExpectancy method should also calculate expected life duration based on height being above 62 inches', () => {
    const tallPerson = new Person(26, "male", 75, 175, false, 1); // height above range for negative longevity
    tallPerson.calculateLifeExpectancy();
    expect(tallPerson.lifeExpectancy).toBeLessThan(76.1);
  });

  test('calculateLifeExpectancy method should also calculate expected life duration based on weight, seeing if bmi is under healthy range', () => {
    const underWeightPerson = new Person(26, "male", 62, 60, false, 1); 

    underWeightPerson.calculateLifeExpectancy();
    expect(underWeightPerson.lifeExpectancy).toBeLessThan(76.1);
  });

  test('calculateLifeExpectancy method should also calculate expected life duration based on weight, seeing if bmi is over healthy range', () => {
    const underWeightPerson = new Person(26, "male", 62, 500, false, 1); 

    underWeightPerson.calculateLifeExpectancy();
    expect(underWeightPerson.lifeExpectancy).toBeLessThan(76.1);
  });
});