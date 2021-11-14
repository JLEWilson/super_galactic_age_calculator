import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Person from './js/person';
import PlanetConverter from './js/planetConverter';

let person;
let planetConverter;

$("#selections").submit((event) => {
  event.preventDefault();
  const age = $("#age").val();
  const sex = $("#sex-select").val();
  const height = $("#height").val();
  const weight = $("#weight").val();
  const isSmoker = $("#smoker").is(":checked");
  const drinksPerWeek = $("#drinks").val();
  person = new Person(age, sex, height, weight, isSmoker, drinksPerWeek);
  planetConverter = new PlanetConverter(person);
  $("#inner-box2").show();
  $("#outer-box2").show();
  $("#output-age").html(person.age);
  if(person.yearsRemaining < 0){       // I hope it's okay that I did this here instead of the business logic, this made more sense to me
    const yearsSurpassed = -person.yearsRemaining;
    $("#output-time").html("Time survived passed expected ending");
    $("#output-years-remaining").html(yearsSurpassed);
  } else {
    $("#output-time").html("Time remaining");
    $("#output-years-remaining").html(person.yearsRemaining);
  }
  $(".output-planet").html("Earth");
});
$("#planets").submit((event) => {
  event.preventDefault();
  const planet = $("#planet-select").val();
  $("#output-age").html(planetConverter.calculateAge(planet));
  $("#output-years-remaining").html(planetConverter.calculateYearsRemaining(planet));
  const planetWithCapitalFirstLetter = planet.charAt(0).toUpperCase() + planet.slice(1);
  $(".output-planet").html(planetWithCapitalFirstLetter);
});