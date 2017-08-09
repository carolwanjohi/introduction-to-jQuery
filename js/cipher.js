/*Take the firstLetter and lastLetter and retun as a new string*/
var function1 = function(firstLetter, lastLetter) {
  return firstLetter + lastLetter;
};

/*Reverse order of First and Last letters and retun as a new string*/
var function2 = function(newString) {
  return newString.split("").reverse().join("");
};

/*Call function1 then function2 and concatenate newString2 to the userInput*/
var function3 = function(userInput, newString2) {
  var newString = function1(firstLetter, lastLetter);
  var newString2 = function2(newString);
  return userInput + newString2;
};

/*Concatenate charAtMeanNumbe at the begininning of newString3*/
var function4 = function(charAtMeanNumber, newString3) {
  return charAtMeanNumber + newString3;
};

/*Reverse order of newString4 and retun as a new string*/
var function5 = function(newString4) {
  return newString4.split("").reverse().join("");
};

/*Variable to store user input*/
var userInput = prompt("Enter your word / sentence here: ");
/*Test*/
// alert(userInput);

/*Get the firstLetter and capitalise*/
var firstLetter = userInput.charAt(0).toUpperCase();

/*Get the lastLetter and capitalise*/
var lastLetter = userInput.slice(-1).toUpperCase();

/*Store the new string after funtion1 is done*/
var newString = function1(firstLetter, lastLetter);
/*Test*/
// alert(newString);

/*Store new string after function2 is done*/
var newString2 = function2(newString);
/*Test*/
// alert(newString2);

/*Store new string after function3 is done*/
var newString3 = function3(userInput, newString2);
/*Test*/
// alert(newString3);

/*Count the number of letters in userInput and divide number by 2*/
var meanNumber = parseInt((userInput.length / 2).toFixed());

/*Letter at the meanNumber*/
var charAtMeanNumber = userInput.charAt(meanNumber);

/*Store new string after function4 is done*/
var newString4 = function4(charAtMeanNumber, newString3);
/*Test*/
// alert(newString4);

/*Store new string after function5 is done*/
var newString5 = function5(newString4);
/*Final Output*/
alert(newString5);
