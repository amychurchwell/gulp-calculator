//front-end
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  event.preventDefault();

  $("#add").click(function(){
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var thing = new Calculator("string");
    var answer = thing.addThings(number1, number2);
    console.log(answer);
    $('.solution').append(answer);
  });

  $("#subtract").click(function(){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var thing = new Calculator("string");
    var answer = thing.subtractThings(number1, number2);
    console.log(answer);
    $('.solution').append(answer);
  });

  $("#multiply").click(function(){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var thing = new Calculator("string");
    var answer = thing.multiplyThings(number1, number2);
    console.log(answer);
    $('.solution').append(answer);
  });

  $("#divide").click(function(){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var thing = new Calculator("string");
    var answer = thing.divideThings(number1, number2);
    $('.solution').append(answer);
  });
});
