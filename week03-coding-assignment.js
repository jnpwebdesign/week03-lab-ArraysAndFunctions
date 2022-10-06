
//1a -- subtract first age from last age
console.log("1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array •	Do not use numbers to reference the last element.");

ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
let endAgeMinusfirstAge = ages.pop() - ages.shift();
console.log("Current first age minus last age is " + endAgeMinusfirstAge);

//1b -- add a new age to array, then repeat step above
console.log("1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");

ages.push(53);
console.log(ages);
endAgeMinusfirstAge = ages.pop() - ages.shift();
console.log("Current first age minus last age is " + endAgeMinusfirstAge);

//1c use a loop to iterate through the array and calculate average age
console.log("1c. Use a loop to iterate through the array and calculate the average age.")

console.log(ages);

let sumOfAges = 0;
let averageAge = 0;

ages.forEach(function(age) {
    sumOfAges = sumOfAges + age;
    averageAge = sumOfAges/ages.length;
});
console.log("Average age is: " +averageAge);

//2 create an array with values ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log("2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’, and 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.");

//2a use a loop to calculate avg number of letters per name
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
console.log(names);

let sumOfLengths = 0;
let averageLength = 0;
names.forEach(function(firstName) {
    sumOfLengths = (sumOfLengths + firstName.length); 
    averageLength =sumOfLengths / names.length;
});
console.log("The average number of letters is these names is " + averageLength);

//2b use a loop to iterate through array and concatenate all names, separated by spaces
console.log("2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. ");
let allNamesTogether = "";
for(firstName of names) { 
    allNamesTogether = allNamesTogether + " " + firstName;
}
console.log("All of the names are: " + allNamesTogether);

//3 How do you access the last element of an array?
console.log("3.	How do you access the last element of any array?");
let lastElementName = names[names.length-1];
console.log("You access the last element of an array with: array[array.length-1]");

//4 How do you access the first element of an array?
console.log("4.	How do you access the first element of any array?")
let firstElementName = names[0];
console.log("The first element of an array is always at the 0 index, so use: array[0]");

//5 Create a new array nameLengths. Write a loop to create a new array that contains the lengths of each name
console.log("5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
let nameLengthsArray = [];

for (i = 0; i < names.length; i++){
    nameLengthsArray.push(names[i].length);
}
console.log("A new array with lengths of all the names: " + nameLengthsArray);


//6 loop to calculate sum of all name lengths in the array
console.log("6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.")
console.log("This is a trick question! This was already completed in step 2a, and violates DRY (don't repeat code)");
console.log("The sum of all the name lengths is " + sumOfLengths);

//7 Write a function that takes two parameters, "word" and n and returns the word concatenated to itself n number of times.
console.log("7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).")
function repeatWords(word, n){
    
    let j = 0;
    let repeatWordNTimes = "";
 
    do {

        repeatWordNTimes = repeatWordNTimes + word;
        j++;
    } while(j < n);
    
    console.log(repeatWordNTimes);
}

// 8????? Create a function to return a full name when given a last and first name. 
console.log("8.Write a function that takes two parameters, firstName and lastName, and returns a full name. •The full name should be the first and the last name separated by a space.");
const aFirstName;
const aLastName;
function returnFullName(aFirstName, aLastName) {
    const fullName = `${aFirstName} ${aLastName}`;
    return fullName;
}

//?????9 Create a function that takes an array of numbers and returns true if the sum is >100 
console.log("9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")

let arrayOfNumbers = [];

function sumNumbersinArray(arrayOfNumbers) {

    let sumOfAllNumbers = arrayOfNumbers.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
      
    if(sumOfAllNumbers > 100) {
        return true;
    } else {
        return false;
    };
}

console.log(sumNumbersinArray());

//10 Create a function that takes an array and returns average of all elements
console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.");

function averageNumbersinArray(arrayOfNumbers) {

    let averageOfAllNumbers = arrayOfNumbers.reduce(function(accumulator, currentValue){
        return (accumulator + currentValue)/(arrayOfNumbers.length);
    });  
    return averageOfAllNumbers;
}
console.log(averageNumbersinArray());

//11 Compare two arrays and return true if first array avg is greater
console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

//12 Is it hot out? Do you have more than $10.50? If both are true, return true. 
console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

let isHotOutside = true;
let moneyInPocket;

function canYouGetIceCream(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    }
}

//13. Solve your own problem
console.log("13.	Create a function of your own that solves a problem.In comments, write what the function does and why you created it.");


