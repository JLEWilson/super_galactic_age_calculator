import {Person} from './../src/age_calculator';

describe('Person', () => {

  test('should correctly create a person object with an age property', () => {
    const person = new Person(26);
    expect(person.age).toEqual(26);
  });

  test('should correctly create a person object with age, sex, height, weight, isSmoker, and drinksPerWeek properties', () => {
    const person = new Person(26, "male", 71, 175, false, 1);
    expect(person.age).toEqual(26);
    expect(person.sex).toEqual("male");
    expect(person.height).toEqual(71);
    expect(person.weight).toEqual(175);
    expect(person.isSmoker).toEqual(false);
    expect(person.drinksPerWeek).toEqual(1);
  });
    
});