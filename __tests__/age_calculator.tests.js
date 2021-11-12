import {Person} from './../src/age_calculator';

describe('Person', () => {

  test('should correctly create a person object with an age property', () => {
    const person = new Person(26);
    expect(person.earthAge).toEqual(26);
  });
});