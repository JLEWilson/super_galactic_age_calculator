export class Person{
  constructor(age, sex, height, weight, isSmoker, drinksPerWeek){
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
    this.isSmoker = isSmoker;
    this.drinksPerWeek = drinksPerWeek;
    this.lifeExpectancy = this.calculateLifeExpectancy();
  }

  calculateLifeExpectancy() {
    let lifeExpectancy = 0;

    //Calculate based on sex. Data from 2017, resource used https://www.advisory.com/en/daily-briefing/2020/07/22/longevity#:~:text=As%20of%202017%2C%20life%20expectancy,with%2083.9%20years%20for%20men.
    switch(this.sex){
      case "male":
        lifeExpectancy += 76.1;
        break;
      case "female":
        lifeExpectancy += 81.1;
        break;
      default:
        return null;  //Unfortunately not enough data me to account for interex individuals at this time
    }

    return lifeExpectancy;
  }
}



/*
age on earth
sex male or female at birth
male: 76.1
female: 81.1
height in inches,
weight in lbs,
isSmoker true or false
drinks per week
*/