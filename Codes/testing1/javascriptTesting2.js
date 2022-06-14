// javescriptTesting2

let element = document.getElementById(`testingJS2`);

element.innerHTML += "Second Page <br> <br> "; 

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let cc = console.log;

let welcome = "Welcome to rouund two for testing of javascript ";
let welcome2 = "on planet Earth.";
let planetartyWelcome = welcome + welcome2;

element.innerHTML += planetartyWelcome;

/*
let user = {
    name: "Sparkles",
    age: 33,


// user.sayHi = function () {
//     cc('Hello!');
 //};

    sayHi() {
        cc(this.name);
    }
};
user.sayHi();

let user = {            !--  Please note that arrow functions are special: they have no this. 
    firstName: "Ilya",    !--  When this is accessed inside an arrow function, it is taken from outside.
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  user.sayHi(); // Ilya
*/





// user = { the prefered syntax
//    sayHi() { this is the same as above just short hand.
// alert('hello')
//    }
//}

//------- constructor operator "new" -------------------
/*
function User(name) {
    this.name = name;
    this.isAdmin = false;
    // return { name: "Sonic" }; will return sonic
    // return; will return this.name 
}
let user = new User(); // can get rid of () if no arguments let user = new User; should keep the ().
user = new User("TBM1"), new User("Else_if")

cc(user);



let user = new function() {// this style of constructor can't be called again 
    this.name = "else_if";
    this.isAdmin = false;
};
cc(user);
*/

function User(name) {
    // name = prompt("what is your name?") works
    this.name = name;
    
    this.sayHi = function() {
        cc( "My name is: " + this.name );
    };
}
let billy = new User("Billy");
billy.sayHi();

/*

let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)
----------
better verstion for chaining
let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)
Don’t overuse the optional chaining
We should use ?. only where it’s ok that something doesn’t exist.

the optional chain operator "?" should only be used when it is actualy needed or it will hide possible bugs.
user.address?.street

as we can see, all of them are straightforward and simple to use. The ?.checks the left part
 for null/undefined andallows the evaluation to proceed if it’s not so.
*/
//---------- Symbols ---- They are hidden by default ------------------
let id1 = Symbol("id");      // this is now a symbol
let id2 = Symbol("id");      // this is a new symbol  id1 != id2
                             // alert(id2); wont work
                             // can NOT converert a symbol into a string unless you manualy do it.
    cc(id1.toString());      // does work says            Symbol(id)
    cc(id1.description);     // does work now it says     id

let id  = Symbol.for("id");  // if symbol didnt exist it is now created.
let id3 = Symbol.for("id");  // symbol.for("") is used to find global symbols in the registry
    cc( id === id3 );        // id === id3 is true.  
let id4 = Symbol.for("ids"); // global symbol
    cc(Symbol.keyFor(id2));  // undefined because id2 is not a global symbol.
    cc(Symbol.keyFor(id3));  // id is returned because it is a global symbol.
    cc(Symbol.keyFor(id));   // same as above

// --- Object Converstion --- check here if needed https://javascript.info/object-toprimitive -------

let jelly = {
    type: "grape",
    worth: 4,
    
    [Symbol.toPrimitive](hint) {
        cc(`hint: ${hint}`);
        return hint == "string" ? `{type: "$this.name"}` : this.worth;
    }
};
cc(jelly);
cc(+jelly);
cc(jelly + 6);

let zeros = 1e9; // same as let zeros = 1000000000 || 1_000_000_000 --- 1 * number of zeros
let microNumbs = 1.2e-6; // === 0.0000012  divides by 1 with number of zeros
let fixIt = .3 + .1;

cc(microNumbs);

cc(zeros.toString(6) ); // zeros.toString(base) base is == to logorithm so time is log(6) so base would === 6

cc(450007..toString(36) );// Need the two dots or javascript will think its a decimal and not a method.
//cc((450007).toString(36)) better syntax.


//cc(Math.floor(43.1)); // rounds down
//    cc(Math.ceil(43.1)); // rounds up
//        cc(Math.round(43.4)); // standard rounding <= 4 down, >= 5 up
//            cc(Math.trunc(45.23)); // simply gets rid of the decimal (does not work on internet explorer)

// let random = 43.53        same as above just using a variable instead of a number.
// cc(Math.floor(random)); rounds down
//    cc(Math.ceil(random)); rounds up
//        cc(Math.round(random)); standard rounding
//            cc(Math.trunc(random));  removes decimal


/*

cc(fixIt.toFixed(2)); // toFixed method returns value as a string   the (2) is how many numbers after decimal
    cc(+fixIt.toFixed(2)); // this way turns it back into a number

cc( (0.28 * 100 + 0.14 * 100) / 100); // this reduces the error still off a bit  0.4200000000000001

cc( isNaN(fixIt)); // false cause its a number.   Converts to a number and tests for NaN
    cc( isNaN(NaN));   // true cause NaN is Nan tho no NaN === another NaN.

cc( isFinite(fixIt)); // converts to a number and if its a regular number returns true 
    cc( isFinite("str")); // if its not a number its false
        cc( isFinite(Infinity)); // false because NaN and  +||-infinity

cc( Object.is(NaN, NaN)); // Compares to values === // Object.is(a, b)

cc( parseInt("255px")); // only returns the 255
    cc( parseFloat("2.55blah")); // rturns 2.55 
        cc(parseInt("0xff", 16)); // second argument is for base. 255 is returned

cc( Math.random()); // returns a randome number > 0 && < 1

cc( Math.max(1, 4, 6, 8, 2, 95)); // returns the highest number in the list of arguments.
    cc( Math.min(1, 4, -6, 8, 2, 95)); // returns the smallest number

cc( Math.pow(3, 8)); // Math.pow(n, power) 3 ** 8 === 6561

/*



/*function pickTwoNumbers(num1, num2) {
   num1 = +prompt("pick a number.", '');
   num2 = +prompt("pick another number.", '');
   alert(num1 + num2);
}  
pickTwoNumbers();

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);
*/


let sports = ['Football', 'Soccer', 'Baseball'];

cc(sports);// pop and push effect the last item of the array.
cc(sports.at(1) );
cc(sports.length);// gives length of array.
cc(sports.pop() );// removed Baseball and calls it.
cc(sports); //length is now 2
cc(sports.push('Baseball')); // adds baseball back length is 3 again.
cc(sports);
sports.push('BasketBall'); // basketball is now the last item in array. 4 items in array.
cc(sports);
sports.push('Tennis', 'Fishing', 'Lacross'); // added 3 items to array sports. lacross is now last 
cc(sports);// length is 7.

cc(sports.shift() ); //shift and unshift effect the first item of an array. shigt removes 1t item.
cc(sports.unshift('Football') ); // adds item to front of array
cc(sports);
cc(sports.unshift('Hunting','Shooting'));// first Item added in this list will be the first Item in array.
cc(sports); // so hunting is [0] shooting is [1].
//cc(sports.shift('shooting')); doesn't appear to work only effects first Item of array

let matrix = [
    [1, 2, 3,],
    [4, 5, 6,],
    [7, 8, 9,],
];

cc(matrix[0][1]);// 2
cc(matrix[2][2]);// 9
cc(matrix);

cc(matrix[1].push(7, 8, 9, 10));
cc(matrix);

/*matrix[0][1] = function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
    alert(sum);
  }
  
matrix[0][1]();
matrix[0][1] = function pickNumbers() {
    let sumArr = [];
    let i;
    let l = 0;
        do {
        i = prompt('pick a number?', 0 );
            
            if (isFinite(i)) {
                while  (isFinite(i))  {
                    i = prompt( "pick a number." , 0 );
                    sumArr.push(+i);
            
                    if (i === ' ' || i === null || !isFinite(i)) break; 
                };
            
            };if (!isNumeric(i)) {
                while (sumArr.length >= 0) {
                    sumArr.pop(i);
                    l = l + i;
                        return(l);
                        alert(l);
                    
                }
            }
        }
    }   
matrix[0][1]();*/

/*
let matrix = [
    [1, 2, 3,],
    [4, 5, 6,],
    [7, 8, 9,],
];


matrix[0][1] = function pickNumbers() {
    do {
        let i = prompt('pick a number?', '');
    } while ( isFinite(i) );
    if ( !isFinite(i)) {
        i += i
        alert(i);
    };
};

matrix[0][1]();
*/

// Splice = swiss army knife :D
let split = [`let's`, 'splice', 'some', 'stuff'];
cc(split);
split.splice(2,2, "in", "javaScript"); //starting at 2 removed and replaced 2
cc(split); // let's, splice, in, javaScript
split.push('for', 'fun');
cc(split); // let's, splice, in, javaScript, for, fun
split.splice( 0, 3, 'Studying'); // removed 3 from array starting at zero and placeing one new element
split.splice(2,1, 'is');
cc(split); // studying, javaScript, is, fun
split.splice(3, 0, "my"); // insert into an array
cc(split); // studying, javaScript, is, my, fun

split.splice();
split.splice(-2,);
cc(split);


let combined = (split.concat(sports));
cc(combined);

sports.hunting = {
   id: 6, type: 'rifle',
   id: 7,  ammo: 'bullets',
   id: 8,  amount: 10,
};
cc(combined[3]);
cc(sports.find(item => item.id == 6));
//combined.forEach(cc);

cc(sports.map(item => item.length));
cc(sports);


// destructuring ------
// let [firstName, lastName, age] = 'Jarad Johnson 32'.split(' ');

// cc(firstName, age);

// cc([,lastName, age]);

// let [a, b, c] = 'abc';
// cc([a,b,c]);
// let [one, two, three] = new Set([1, 2, 3]);

// cc([one, two, three]);

let user = {
    name: 'Jarrad',
    lastName: 'Johnson',
    age: 32,
};

for(let [key, value] of Object.entries(user)) {
    cc(`${key}:${value}`);
}

// let [name1, ...noName] = ['Lets', 'Go', 'Brandon!'];
// cc(name1, noName);

let [...name1] = ['Lets', 'Go', 'Brandon!'];
cc(name1);


let xyz = {
    hight:  10 ,
    width:  10 ,
    length: 5 ,
};

let {hight: h, width: w, length: l} = xyz;
cc(h * w * l);


let now = new Date();
cc(now);

let Jan01_1970 = new Date(0);
cc(Jan01_1970);
let Jan01_1971 = new Date(366 * 24 * 3600 * 1000);
cc(Jan01_1971);
cc(new Date().getTimezoneOffset() );






































