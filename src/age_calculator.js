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
    // calculate based on height. Data fom 2014 shows correlation between height and life duration. Specifically a divide between those above and below 5'2" resource : https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0094385
    if(this.height > 62){
      const difference = this.height -62;
      lifeExpectancy -= difference; //definitely not exact but will suffice. 1 year off for every inch above 62
    }
    //calculate based on weight/bmi resource https://www.thelancet.com/journals/landia/article/PIIS2213-8587(18)30288-2/fulltext
    let bmi = 703 * this.weight / (this.height * this.height); // formula from the cdc https://www.cdc.gov/healthyweight/assessing/bmi/childrens_bmi/childrens_bmi_formula.html;
    if(bmi < 18.50){
      if(this.sex === "male"){
        lifeExpectancy -= 4.3;
      } else{
        lifeExpectancy -= 4.5;
      } 
    } else if(bmi > 24.9){
      if (this.sex === "male"){
        lifeExpectancy -= 4.2;
      } else{
        lifeExpectancy -= 3.5;
      }
    } else{
      //healthy range, leave lifeExpectancy the same
    }
    //calculate based on if they smoke, resource: https://www.nejm.org/doi/full/10.1056/nejmra1308383
    if(this.isSmoker){
      lifeExpectancy -= 10;
    }
    //calculate based on drinks per week, resource: https://www.health.harvard.edu/blog/sorting-out-the-health-effects-of-alcohol-2018080614427#:~:text=When%20compared%20with%20people%20who,by%20one%20to%20two%20years
    if(this.drinksPerWeek > 7 && this.drinksPerWeek <= 14){
      lifeExpectancy -= .5;
    } else if(this.drinksPerWeek > 14 && this.drinksPerWeek < 25){
      lifeExpectancy -= 1.5;
    } else if(this.drinksPerWeek > 25){
      lifeExpectancy -= 4.5;
    } else {
      // do nothing here
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