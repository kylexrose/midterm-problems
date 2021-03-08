function isEvenlyDivisible(num1, num2) {
  return !(num1 % num2);
}

function halfSquare(num) {
  return num**2/2;
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  str = str.split("");
  while(str[str.length-1] === "!"){
    str.pop();
  }
  return str.join("") + "!";
}

function countWords(str) {
  str = str.split(" ");
  return str.length;
}

function containsDigit(str) {
  for(let i = 0; i < str.length; i++){
    if(!isNaN(str[i]) && str[i] !== " "){
      return true;
    }
  }
  return false;
}

function containsLowerCase(str) {
  return str.toUpperCase() !== str;
}

function containsUpperCase(str) {
  return str.toLowerCase() !== str;
}

function containsNonAlphanumeric(str) {
  return str.replace(/\W/g, "") !== str;
}

function containsSpace(str) {
  for(let i = 0; i < str.length; i++){
    if (str[i] === " "){
      return true;
    }
  }
  return false;
}

function digits(num) {
  num = num.toString();
  output = [];
  for (let i = 0; i < num.length; i++){
    if(!isNaN(num[i])){
      output.push(Number(num[i]));
    }
  }
  return output;
}

function truncate(str) {
  if(str.length >= 15){
    let output = "";
    for (let i = 0; i < 8; i++){
      output += str[i]
    }
    return output + "..."
  }
  return str;
}

function isValidPassword(str) {
  return (containsDigit(str) && 
  containsLowerCase(str) && 
  containsNonAlphanumeric(str) &&
  containsUpperCase(str) && 
  !containsSpace(str))
}

function onlyPunchy(arr) {
  output = [];
  for(let i = 0; i < arr.length; i++){
    let str = exclaim(arr[i]);
    if(!isLong(str)){
      output.push(str);
    }
  }
  return output;
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}