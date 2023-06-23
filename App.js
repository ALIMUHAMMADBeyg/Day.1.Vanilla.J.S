/*This is javascript from scratch

understanding the basics of programming

1/Variables:
a variable in javascript is name of a storage where we store our data

to create a new variable we use let keyword in javascript
Example:
/*/ ///
let message;
message = 'Hello'; //Here the 'Hello' string is stored in the variable name message

alert(message);
// to be concise we can combine the variable declaration and assignment into a single line

let messag = 'Hello'
alert(messag);


//we can also declare multiple variables in one line:

let user = 'john',
    age = '12',
    mesg = 'Hello';

//That might seem shorter but but it,s not recommended for the sake of
//better redability single in per variable is used 
//the multiline variant is a bit longer but easier to read
// older scripts you may also find another key word var instead of let 


//DataTypes in javascript 

// In programming data types refers to to the classification and categorization of the value
// that determines the types of oprations that can be performed on it and the way it is stored in the memory 
//it defines the set of values that a variable can hold and the oprations that can be performed on those values
//primitive and reference types 

//Primitive types 



//Rference types


// Primitive data type (assigned by value)
let x = 5;
let y = x;
x = 10;

console.log(x); // Output: 10
console.log(y); // Output: 5

// Reference data type (assigned by reference)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
alert('Hello world');



//type convert to boolean
let = ('gfgf');
volvo = caR;
(typeof volvo === String)

//no error
let messg = 'Hello';
messg = 123456;


let javascript = '123';
let num = number(javascript);
alert(typeof num);



let namefeildchecked = true;


let isGreater = 6 > 8;
let front;
front = 'ui'
alert(front);


let Hello;
hello = "Helo";
alert("Hello");



//javascript .info


//Code structure

//Statements


//statements are syntax constructs and commands that performs actions

//we have already seen a statemnt 
alert('Hello world !'); //that shows the message hello world
//we can have as many stements as we want in our code as we want 
// satements can be seprated with semicolons 
//for example here we split hello world in two statements
alert('Hello');
alert('world');
//usually statements are written in seprate line to make the code more readble
alert('Hello');
alert('World');


//semi colons


//a semicolon is ommitted in most cases when a line break exists//
//this would also work;



alert('Hello');
alert('Hello');


//here the javascript interprets the line break as an "implicit" semicolon.

//IMPLICIT

//In certain situations javascript converts one data type into another .this is known as implicit conversion.

//In most cases a newline implies a semicolon.But in most cases does no mean always 
//There are cases when a newline does not mean a semicolon.for example:

alert(3 +
    1 +
    2);

//adding a background image with javascript

//document.body.style.backgroundImage = "(' <img src = ./img/')"

//The code outputs 6 because javascript does not insert semicolons here. it is intuivtivily obvious that if the 
//line ends with a + then it is an incomplete expression so a semicolon there would be incorrect and in this case that works as intended.



//But there are situations where javascript fails to assume a semicolon where it is really needed.

//error which occur in such cases are quite hard to find and fix


// An example of an Error 
// if u are curious to see a concrete Example of sucha na error , this this code out


alert("Hello");

[1, 2].forEach(alert);


//No Need to think about the meaning of the brackeetes [] and foreach yet. we will study them later. For Now, just remember the result 
// of running the code: it shows Hello and then 1 tthen 2 
//Now lets remove the semicolon after the alert:


alert("Hello")[1, 2].forEach(alert);


//I am a software Enginner and I lOve To Code........


// The Difference Compared to the code above is only one character: the semicolon at the end of the first line is gone 

//Let develope a personal selp ai assistan who vil be nificial f4 Mi like the iron man onw 
//Allhamdulilah right i feeling like iron man

//elon is the real iron man
//Newer Guilty 
//Never to regret it but to correct it........

//Allhamdullilah For everything

//if we run this \\

/*
IF we run this code only the first Hello shows (and  there is an error  you may need to open the console to see it).There aer no 
numbers any more.

thats because javascript does not assume a semicolon before square brackets [...].So,the code in the last example is treated as 
single statement 
