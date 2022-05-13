// javaScriptTesting 3 challenges

let element = document.getElementById(`testingJS3`);

element.innerHTML += "Third Page Challenges <br> <br> "; 

let cc = console.log;

let welcome = "Welcome to the challenge rouund for testing of javascript ";
let welcome2 = "on planet Earth.";
let planetartyWelcome = welcome + welcome2;

element.innerHTML += planetartyWelcome;


let word = 'This is great   tEsties 1  ';
let arrString;
cc(word);
    word = word.toLowerCase();
    arrString = word.split(' '); 

        arrString = arrString.filter(arrString => arrString.length > 1 && arrString.length < 10e4 )

    cc(arrString);
    cc(arrString.pop().length);
    cc(arrString);


/* didnt work properly needed filter.
    let word = 'This is great   tEsties 1  ';
    word = word.toLowerCase()     
 
    let arrString = word.split(' ');
         arrString.map(item => item.length); {
        if (arrString  < 1 || arrString > 10e4) { delete[] };
    
            return(arrString.pop().length)
     
  
  
lengthOfLastWord();
};*/

let strs = ['pro', 'prototype', 'proficicent'];
var longestCommonPrefix = function(strs) {
    for (strs; strs.startsWith; strs ++) {
return strs
    }




    // strs = strs.map(item => item.startsWith( strs.forEach(element => { 
    //     strs.startsWith == strs.startsWith 
        
    //     })));
    //     return strs
}


cc(longestCommonPrefix(strs));











