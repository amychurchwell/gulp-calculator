(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//back-end

//DA OBJECT DAT IS DA CONSTRUCTOR
function Calculator(something){
  this.something = something;
}

Calculator.prototype.addThings = function(a,b){
  return a + b;

};

Calculator.prototype.subtractThings = function(a,b){
  return a - b;

};

Calculator.prototype.multiplyThings = function(a,b){
  return a * b;

};

Calculator.prototype.divideThings = function(a,b){
  return a / b;

};


exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
