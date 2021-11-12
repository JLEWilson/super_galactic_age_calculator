import { EXPORTDECLARATION_TYPES } from '@babel/types';
import {Person} from './../src/age_calculator';

describe('Person', () => {

  test('should correctly create a person object with an age property', () => {
    const person = new Person(26);
    expect(person.age).toEqual(26);
  });

  let person;
  let person2;

  beforeEach(() => {
    person = new Person(26, "male", 71, 175, false, 1);
    person2 = new Person(26, "female", 60, 120, true, 10);
  });

  test('should correctly create a person object with age, sex, height, weight, isSmoker, and drinksPerWeek properties', () => {
    expect(person.age).toEqual(26);
    expect(person.sex).toEqual("male");
    expect(person.height).toEqual(71);
    expect(person.weight).toEqual(175);
    expect(person.isSmoker).toEqual(false);
    expect(person.drinksPerWeek).toEqual(1);
  });
    

  test('calculateLifeExpectancy method should calculate expected life duration based on sex property and set outcome as lifeExpectancy property', () => {
    person.calculateLifeExpectancy();
    person2.calculateLifeExpectancy();
    expect(person.lifeExpectancy).toEqual(expect.any(Number));
    expect(person2.lifeExpectancy).toEqual(expect.any(Number));
  });
});