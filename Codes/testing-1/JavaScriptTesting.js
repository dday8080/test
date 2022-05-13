// Java script testing
let element = document.getElementById('test');
element.innerHTML += "First ";

let cc = console.log;



let y = ` Worlds `;
let x = " Hello";
let z = x + y;
element.innerHTML += z;
console.log(z);
const ourPlanet = " Earth";

let Planet1 = "Mercury";

let a = Planet1 + ourPlanet;

element.innerHTML += a;

//alert( 1 / 0); infinity 
// NaN is sticky any mathmatics done to NaN still returns NaN with exception to one (NaN ** 0 is 1)

/*let hotel = "bad";
let house = 'worse';
let apartment = `best ${hotel}`; back ticks(tild key) alows for embeded variables in a string */

//alert(`Spark${x}! Welcome to${ourPlanet} Hope you had safe travels.`);

//Boolean is either yes/no ( true or false)

/*The typeof operator returns the type of the argument.
 It’s useful when we want to process values of different types differently or
 just want to do a quick check.*/

// alert (typeof true); Boolean
// alert (typeof 10n); bigint
console.log(typeof 1);// number

// let test = prompt ("Test", '');

// let apartment = confirm("will we own an Appartment complex?");

// console.log(apartment); //true if ok is pressed

/* asks for name then tells you your name.
let name = prompt( 'What is your name?', '');
alert(`Your name is ${name}.`)
*/

// math 101 +add -subtract /divide * mulitiply % divide and keeps the remainder 10 / 3 = 1 ** is exponent 2 ** 2 = 4

let apples = "2";
let bannans = "3";

//alert(apples + bannans); //=23 operated as a string

//alert(+apples + +bannans); // will be 5 the plus infront of apples and bannanas turns them in to numbers thus added like numbers.
//alert( number(apples) + number(bannans) ); long way to do the above ^

let n = 2;
n += 5;  // 2 + 5= 7
n *= 2;  // 7 * 2 = 14
cc(n);

let m = 2;
m *= 3 + 5; // = 16 this does 5 + 3 = 8 first then * 2 then returns 16 to m

cc(m);

m++;
cc(m);
n--;
cc(n);
// prefix and postfix ++ || -- prefix is will run first and return values with the plus 1 added to it post might not
// alert( 2 * ++n) will = 28 wher alert(2 * n++) = 27   n start value is 13  


// a != b means not equal

// conditional operator is the question mark ?

//let age  = prompt('how old are you?', 18);

/* let message = (age < 5) ? 'go find mom!' :
    (age < 18) ? "get back to school." :
    (age < 100) ? " welcome to your new home!":
    "Impressive, but turn around or it might be your last ... ";
    
cc (message); 
 let Nagger = (prompt)("I told you, you have to say Yes! Yes? " , '');
 
 Nagger == ("yes" && "Yes") ? // ? replaces if 
 alert("balls are in purse") : alert("still have your balls!");

let originalNameOfJS = prompt("What is the offical name of JavaScript?")

if (originalNameOfJS == "ECMAScript") {
    cc("Correct");
}   else {
    cc(" learn the basics B!");
}
*/

// let result = (b + c < 4) ? ("below") : ("over");



/*let message = (login =="Employee") ? "Hello" :
(login == "Director") ? "Greetings":
(login == '') ? 'No login':
""; */

/*
let ageReq = prompt(' how old are you?', " ");
if (ageReq >= 18) {

let login = prompt('who are you', '');

if (login === "admin") {

    let password = prompt("you're password?", '');

    if (password === "Doctor") {
        alert("Welcome Hefa");
    
    } else if (password === '' || password === null) {
        alert("canceled");
    }else {
        alert("Wrong password");
    }   
     
} else if (login === '' || login === null){
    alert('canceled');
}else {
    alert('you are lame!');
} if (ageReq < 18 || ageReq === null){
    alert('canceled');
}}else {
    alert(' Go Home');

}*/ // above is your age/ username/ password and alerts the results of your input


// **** alert( alert(1) || 2 || alert(3) ); ** refresh this often **  \alert(1) returns undifined then it returns 2 which is truthy so it does not run alert(3).
// **** alert( alert(1) && alert(2) ); ** refresh this often ** the call to alert returns undefined then evaluates left operand and outputs 1 then stops because of the undefined (falsy) && looks for a falsy value and returns it.


// result = (a !== null && a !== undefined) ? a : b; ?? is used instead of !==

let user;
cc(user ?? "anonymous"); // uses anonymous because user is NOT defined.
user = "sparky";
cc(user ?? "anonymous"); // now user is Defined and returns "sparky".

let firstName = null;
let lastName = null;
let nickName = 'Scrappy Doo';

cc(firstName ?? lastName ?? nickName ?? "Anonymous"); // could replace this with || // "cc(firstName || lastName || nickName || "Anonymous");" 
// above checks for the first variable to not be undefined or null FirstName and lastName are null so both of those are passed nickName is values as Scrappy Doo (returns Scrappy Doo). 
// ** IMPORTANT diffrence between || and ?? is that || === first truthy value, and ?? === first defined value.

/*
let height = 0;
cc(height || 100); //returns 100 because 0 is falsy
cc(height ?? 100); //returns 0 because height is defined
height = 20;
cc(height || 100) // returns 20 as 20 is true
cc(height ?? 100)// still returns 20 as its still first to be defined
*/

let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);
cc(area); // === 5000 because height and width is (100) * (50) (height and width is defined as null)

height =20
width = 40

area = (height ?? 100) * (width ?? 50);
cc(area); //  === 800 height and width are definded 20* 40.
// perenthese in the above are important due to higher precedence 
// let area = height ?? 100 * width ?? 50;  will do 100 * width first
//cc(area) = height ?? 100 * width ?? 50; wont work

//let x = 1 && 2 ?? 3; // Syntax error forbids using ?? with && and || unless precedence is explicitly specified with ()

let u = (1 && 2) ?? 3; // This works and answer is 2 (1 && 2) run first giving 2 ?? 3 two is the first defind variable.
// its a good idea to use () when using ?? due to its low precedence rating. 

// while (condition){
// code 
// loop body
// } while the condition is truthy the code from the loop body is executed
// let i = 0;
//while (i <= 4) { // condtion
// cc(i); // code
// i++; // loop body
// }
// while (i){
// cc(i);
// i--;
//}
// while (i) cc(i--); same thing as the above while statement.

/* do {
    loop body
} while (condtion);
*/

// i = 0
// do {
// cc(i);
// i++
// }while (i < 3); // this form is usaualy used if you want the loop to execute at least once.

/* for(begin; condtion; step) {
    ... loop body ...
}
for/ part by part   begin-- executes once while entering the loop let                           (i = 0)
                    condition-- checked before each loop interation if its false the loop stops (i < 3)
                    body-- runs repeatedly while the condtion is true                           (cc(i))
                    step-- executes after the body on each iteration                            (i++)
        general idea is
        run begin
        (if condtion then run body and run the step)
        (if condtion then run body and run the step)
        (if condtion then run body and run the step) continue while condtions are true...
*/

//for ( let i = 0; i < 3; i++){ the let i = 0 variable is only visible inside the loop
// cc(i);
// } 
// cc(i) will run the step one last time because this is outside of the loop so inside 
// loop will be 0, 1, 2 and the one outside the loop will be 3
// we can leave out any part of the for statement

//for(; i < 3; i++) the begin has already be declared as 0 above 

// for (;;){ this will repeat without limits
// }the double ;; is required or it will be a syntax error
/*
let sum = 0;

while (true) {

    let value = +prompt("enter a number", '');
    if (!value) break; // (*)

    sum += value;
}
cc('Sum:' + sum );


for (i = 0 ; i < 10; i++){
    if(i % 2 == 0) continue;
    cc(i);
}

outer: for (;i < 3; i++){
    for (let j = 0; j < 3; j++){
        let input = prompt('value at coords (${i}, ${j})', '');

        if (!input) break outer;// break directive must be inside a code block
    }
}
cc('done');

for( let j = 2 ; j <= 10; j++) {
    if(j % 2 == 0){
        cc(j);// cc only even numbers
   }
}

while (i < 3){
    cc(`number ${i}!`);
    i++;
}
*/

/*
let h;
    
   do {
        h = prompt('give me a number bigger then 100', 0);

    }while (h <= 100 && h );*/


/*let d = 10;

nextPrime:
for (let i = 2; i <= d; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
!!!!-------- i need to pracitce this More-------!!!!
*/

let f = 4;

switch (f) {
    case 1: // does not === 1 wont execute
        cc('nothing')
        break;
   
    case '2':// case 2 and 3 are grouped
    case '3':// case 2 and 3 are also a sting and " f = 4 " is not a string so wont work.
        cc('both are wrong');
        break;
   case 4:// this one executes because case 4 = 4
       cc('works');// if f was f = '4' this would not work because case 4 is not a string.
       break;
   default:// doesnt run because the code stops at case 4
       cc( 'anything could go wrong');
}
let browser;


if (browser === 'Edge') {
     cc("Edge sucks");

} else if (browser === 'Chrome' 
    || browser === 'Firefox' 
    || browser === 'Opera') {
        cc('These are good options');

    } else if (browser === 'Safari') {
        cc('works but should try something new!');

    } else {
        cc("we are hopefull this will work");
    }


let g = 4;
switch (g) {
    case 0:
        cc(0);
        break;
    case 1:
        cc (1);
        break;
    case 2:
    case 3:
        cc( '2,3' );
        break
    default:
        cc('broken');
    break;
}


if (g == 4) {
    cc('might work');
} else if(g == 5
    || g == 6
    || g == 7
    ) {
        cc('hopefull');
    } else (g - g)

function showMessage() {
    let a = 'hello, This is my first funciton';// Variables inside functions are local a has
                                               // been defined earlier in this test text. 

    let b = "spark"
    let c = ` and ${b} is bad at it`;
    
     cc(a + c);                                    
}
showMessage();


function hesBad( name, text) {
    name = 'spark ';
    
    cc(name + `likes pain `);
}

hesBad(name, 'likes pain');

function nutCracker(name, text = " 1...2...3... nuts are cracked!", buttstuff){
    name = 'spark';
    buttstuff = " Now you can try buttstuff! :) ";
cc(name + text + buttstuff);

}
nutCracker();


function findPrimeNumbers(n) {
    nextPrime: for (let i = 2; i < n; i++) {// nextPrime is a lable

        for (let m = 2; m < i; m++) {
            if (i % m == 0) continue nextPrime;// try and do one action per function
        }
        cc(i);
}
}
findPrimeNumbers(10);


/*
function checkAge(age) {
    let age = prompt("how old are you?", 18); 
    return (age >= 18) ? true : confirm('did your parents allow you?');
}
*/

function checkAge(age) {  // this is the same as above
    return (age >= 18 ) || confirm('did your parents allow you?');
}

function minValues (a, b) {
    return (a < b) ? cc(a) : cc(b); 
}
minValues(2, 5);
minValues(3, -1);
minValues(1, 1);

/*function powers(x, n) {
     
     x = prompt('pick a number greater then 1', ' ');
     n = prompt('to what power do you want?', '');
    ( n < 1) ? alert( 'pick new numbers' ) : x = (x ** n);

    cc(x);
}
powers(2, 2);

let func = powers; // This copies the powers function to func. 
//let func = powers() returns the value after funciton powers is executed; to func 
// powers(2, 2); == 4 let func = 4 in the above style vs the first style. 
let address;
let phoneNumber;
let cityState;

function contactInfo(address, phoneNumber, cityState) {
      
    function address() {
        address = prompt("what is your address?", '');
        return address;
       cc(address);
       }
    function phoneNumber() {
        phoneNumber = prompt('what is your phone number?', "")
        return phoneNumber;
        cc(phoneNumber);
    }
    function cityState() {
         city = prompt('what City do you live in', '');
       state = prompt('what state do you live in?', '');
        return city + state;
        cc(cityState);
    }
    }
cc(contactInfo(address));

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now

*/

// arrow functions ----
let double = (j) => j * 2;
cc(double(2));

// => the above is the short way to make --- let double = function(j) { return j *2} ; 

/*
let ask = (question, yes, no) =>  confirm(question) ? yes() : no();

ask("do you agree?", 
() =>  {cc("you agreed."); },
() =>  {cc('you cancled...'); }
);


function ssiGains(income, loss, earned) {  
    
    earned = ((income / 2) + 10);

    if (earned > 20) {
        loss = earned - income; 
        cc(income, loss, earned);
        
    } else if (earned <= 20 || null){
      return earned;
    }
}*/

/*function ssiGains(income, loss, earned) { // Work ON after Arrays and Objects.
    let ssi = [income, loss, earned];

    earned = ((income / 2) + 10) ;
    (earned > 20) ? loss = (earned - income) : ((earned <= 20) || null); 
    return ssi;
    
}cc(typeof(ssiGains(1000)));

cc((ssiGains(1000)));
element.innerHTML += (ssiGains(1000,));
*/  

function howdy(name) { name = 'Billy'
    let phrase = `hello, ${name}`;

    say(phrase);
}

function say(phrase) {
    alert(`**${phrase} **`);
}

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

let guest = {
    name: 'sparky',
    age: 75,
    "likes butt stuff": true, // multiword property name must be quoted
     
};// add a comma at the end of the last property to make it easier to add or move etc more properties.
// guest.likes butt stuff = true *wont work* 
guest['likes butt stuff'] = true; // [] use this for strings.

 delete guest.age;// deletes guest age with dot notation
 guest.isAdmin = false;


cc( guest );

let areaCode = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1" : "USA",

};
for( let Code in areaCode) {
    cc(areaCode)// this shows USA first 1, 41, 44, 49
}


let areaCodes = {
    Germany: 49,
    Switzerland : 41,
    Britain: 44,
    USA : 1,

};
for( let Code in areaCodes) {
    cc(areaCodes)// this will show in the order its written above
}

let users = {
    name:    'John',
    surname: 'Smith',
    name:    'Paul',
    delete: 'name',
}

cc( users);
delete users.name;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

cc(salaries.John + salaries.Ann + salaries.Pete)

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

cc(sum); // 390


Object.assign(guest, [salaries, /*as many as needed*/]);
// first arguemnt (guest) is target object 
// the following are source objects.
// properties of all arguments starting with the second(salaries) -
// are copied into the first object(guest)

// let clone = Object.assign({}, guest); clones all properties of guest.

// Garbage collection happens automaticlly things need to be accessable (refernced)
// in order to not be collected as garbage 






for (let i = 0; i < 5; i++){
    cc("Tommy");
    }

    for (let i = 0; i < 5; i = i + 2){
       cc(i);
      }







