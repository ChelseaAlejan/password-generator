// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
// 
function userquestions(){
  var passwordlength=prompt('how long would you like your password to be?')
  var confirmnumbers=confirm('would you like your password to have numbers?')
  var confirmspecialCharacters=confirm("would you like your password to have special characters?")
  var confirmlowers=confirm('would you like your password to have lowercase letters?')
var confirmuppercase=confirm('would you like your password to have upper case letters?')

var answerobject={ 
  length:passwordlength,
  numbers:confirmnumbers,
  special:confirmspecialCharacters,
  lowers:confirmlowers,
  uppers:confirmuppercase,


}
return answerobject

}


//function to randomize array 
function random(array){
  var randomIndex = Math.floor(Math.random()*array.length)
  var randomCharacter = array[randomIndex]
  return randomCharacter
}
//function to take user input and ramdom array in order to generate password 
function generatePassword(){ 
var answers=userquestions()
var characters=[]
var newpassword=[]

if(answers.numbers===true){ 
  characters=characters.concat(numberArray)
}

if(answers.lowers===true){ 
  characters=characters.concat(lowerCaseArray)
}
if(answers.uppers===true){ 
  characters=characters.concat(upperCaseArray)

}if(answers.special===true){ 
  characters=characters.concat(specialCharacters)
}
for(var i=0;i<answers.length;i++){
  newpassword.push(random(characters))
}
return newpassword.join("")
}