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
