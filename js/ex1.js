//ans number 02-----------------------------
let firstName = ('Md. Mahmudul Hasan');
let lastName = (' Pavel. ');
let yearofBirth = (1994);
let age = (2025 - yearofBirth);

let blueboxText = ('"Hi, my name is ' + firstName + lastName + "I'm " + age + "years old and I'm learning Javascript.");
document.getElementById("student_message").innerHTML = blueboxText;

//ans number 03-----------------------------

let firstNumber = 101;
let secondNumber = 7;
let calcNumber = firstNumber / secondNumber;
document.getElementById("result").innerHTML = calcNumber;


//ans number 04--------------------------------

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();

if (phone1.length === 9) { console.log('Valid'); } else { console.log('Invalid') };

if (phone2.length === 9) { console.log('phone2 is valid'); } else { console.log('Invalid') };

if (phone3.length === 9) { console.log('Valid'); } else { console.log('Invalid') };


//ans number 05-------------------------------
let power = Math.pow(32, 6);
console.log(power);

//ans number 06---------------------------------

var variableNum1 = ('NAME');
variableNum1 = 'NAME = It is not maintain jvascript syntex. This is written as uppercase.';
console.log(variableNum1);

var variableNum2 = ('$num1');
variableNum2 = '$num1 = We can use a variable name starting with $ sign and it is acceccptable to JS syntex.';
console.log(variableNum2);

var variableNum3 = ('typeof');
variableNum3 = 'typeof = We can not use a variable name which are reserved for jvascript syntex. It is not acceccptable because we use (typeof) to find a data type.';
console.log(variableNum3);

var variableNum4 = ('first-name');
variableNum4 = 'first-name = We can not use a variable name which is written with dash sign. We can use Underscore sign.';
console.log(variableNum4);

var variableNum5 = ('attempt_2');
variableNum5 = 'attempt_2 = I think it is ok. It started with smaller letter and underscore sign is used inaddition number is written in end';
console.log(variableNum5);

var variableNum6 = ('2ndAttempt');
variableNum6 = '2ndAttempt = It is not maintain js syntax. lthough it is written in camelcase but started with number. So it is not acceeptable.';
console.log(variableNum6);

var variableNum7 = ('full name');
variableNum7 = 'full name = It is not maintain js syntax. Space is given between two words. So it is not acceptable.';
console.log(variableNum7);

//ans number 07--------------written on html page.

//ans number 08-----------------------------

document.getElementById("url_2").innerHTML = "https://" + document.getElementById("url_1").innerText;

document.getElementById("url_4").innerText = "www.google.com";