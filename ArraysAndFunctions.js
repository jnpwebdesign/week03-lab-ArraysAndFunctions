let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);

// print the last element in array1
console.log(array1[array1.length - 1]);

// add 16 and 3 to array1
array1.push(16, 3);
console.log(array1);

// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1);
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array
let myTodoList = [];

// add three todo items to the array using a built-in array method
myTodoList.push("wake up", "brush teeth", "eat breakfast");
console.log(myTodoList);

// remove the second item in the array
myTodoList.splice(1,1);
console.log(myTodoList);

// create another array, yourTodoList, and add two todo items
let yourTodoList = [];
yourTodoList.push("wake up", "work out");
console.log(yourTodoList);

// create another array, ourTodoList
let ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = [...new Set([].concat(myTodoList, yourTodoList))];

console.log(ourTodoList);

// sort the following array from Z-A
let alphabetArray = ['H', 'T', 'A', 'Z', 'J', 'L'];
console.log(alphabetArray);
alphabetArray.sort();
console.log(alphabetArray);

// create a function called reverse that takes in a parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
console.log("");
console.log("Create a function called reverse that takes in a parameter. This function will return the opposite of whatever is passed in: if its a boolean, return the opposite. If its a number or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN). If it's an array, return the reversed array with each element reversed")

let testValue;
function reverseFunction(testValue){
    if(typeof testValue === "boolean"){
        return !testValue;
    } else if (typeof testValue === "number"){                      //checks if testValue is a number
        let testValueString = testValue.toString()                  //converts number to string
        let splitStringArray = testValueString.split("");           //splits strings into elements in an array
        let reverseArray = splitStringArray.reverse();              //reverses each element
        let reversedString = reverseArray.join("");                 //joins the elements back together into one string
        return Number(reversedString);                              //turns string back into a number and returns it                   
    } else if (typeof testValue === "string"){
        let splitString = testValue.split("");
        let reverseArray = splitString.reverse();
        let reversedString = reverseArray.join("");
        return reversedString;
    } else if (typeof testValue === "object"){
        let reversedArray =testValue.reverse();
        let reversedElements = reversedArray.map(function(element){
            if(typeof element === "boolean"){
                return !element;
            } else if (typeof element === "number"){                      //checks if testValue is a number
                let testValueString = element.toString()                  //converts number to string
                let splitStringArray = testValueString.split("");           //splits strings into elements in an array
                let reverseArray = splitStringArray.reverse();              //reverses each element
                let reversedString = reverseArray.join("");              //joins the elements back together into one string
                return Number(reversedString);                              //turns string back into a number and returns it                   
            } else if (typeof element === "string"){
                let splitString = element.split("");
                let reverseArray = splitString.reverse();
                let reversedString = reverseArray.join("");
                return reversedString;
            }  
        });
        return reversedElements;
    }    
}

let originalArray = [12, 34, "fifty-six", true];
console.log("Original Array: " +originalArray);
console.log("reverseFunction Array: " + reverseFunction([12,34,"fiftysix", true]));

console.log("");
// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed (numbers will be separated by commas)
function addingMachine(){
    let runningTotal = 0;
    for(k = 0; k < arguments.length; k++){
        runningTotal += arguments[k];
    }
    return runningTotal;
}
console.log(addingMachine(1,2,3,4, 682));

console.log("");
/*
You just signed a contract as an estimator for a restoration company. 
Your contract states that you take home 10% of the profits on the first $100,000
20% on the next $400,000
35% on the next $500,000
40% on all profits above $1,000,000
create a function that will allow you to check how much of a bonus you make
the function should take in two variables as arguments, grossInvoiced and profitMargin
*/
let grossInvoiced;
let profitMargin;

function  calculateBonus(grossInvoiced, profitMargin) {
    let netProfit = grossInvoiced * profitMargin;
    let FortyPercent = 0;
    let ThirtyFivePercent = 0;
    let TwentyPercent = 0;
    let TenPercent = 0;
    let myBonus = 0;
    
    if (netProfit >= 1000000) {
        FortyPercent = 0.4 * (netProfit - 1000000);
        ThirtyFivePercent = 175000;              // 0.35 * 500000
        TwentyPercent = 80000;                   // 0.2 * 400000
        TenPercent = 10000;                      // 0.1 * 100000

    } else if(netProfit <1000000 && netProfit >=500000) {
        FortyPercent = 0;
        ThirtyFivePercent = 0.35 * (netProfit - 500000);
        TwentyPercent = 80000;                   // 0.2 * 400000
        TenPercent = 10000;                      // 0.1 * 100000
    } else if(netProfit < 500000 && netProfit > 100000) {
        FortyPercent = 0;
        ThirtyFivePercent = 0;              
        TwentyPercent = 0.2 * (netProfit - 100000);                   
        TenPercent = 10000;                      // 0.1 * 100000
    } else {
        FortyPercent = 0;
        ThirtyFivePercent = 0;              
        TwentyPercent = 0;                   
        TenPercent = 0.1 * netProfit;                   
    }
    myBonus = FortyPercent + ThirtyFivePercent + TwentyPercent + TenPercent;
    return myBonus;

}
console.log(calculateBonus(100000, .9));