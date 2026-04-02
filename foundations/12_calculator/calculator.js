const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
};

const multiply = function(arr) {
	let product = 1;
  
  for(let i = 0; i < arr.length; i++){
    product *= arr[i];
  }

  return product;
};

const power = function(a, b) {
  let product = 1;

  for(let i = 0; i < b; i++){
    product *= a;
  }

  return product;
};

const factorial = function(a) {
	let result = 1;
  for(let i = 1; i <= a; i++){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
