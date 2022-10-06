
//1a -- subtract first age from last age
ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
let endAgeMinusfirstAge = ages.pop() - ages.shift();
console.log("Current first age minus last age is " + endAgeMinusfirstAge);

//1b -- add a new age to array, then repeat step above
ages.push(53);
console.log(ages);
endAgeMinusfirstAge = ages.pop() - ages.shift();
console.log("Current first age minus last age is " + endAgeMinusfirstAge);

//1c use a loop to iterate through the array and calculate average age
console.log(ages);

let sumOfAges = 0;
let averageAge = 0;

ages.forEach(function(age) {
    sumOfAges = sumOfAges + age;
    averageAge = sumOfAges/ages.length;
});
console.log("Average age is: " +averageAge);


//2 create an array with values ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
console.log(names);

//2a use a loop to calculate avg number of letters per name
let sumOfLengths = 0;
let averageLength = 0;
names.forEach(function(firstName) {
    sumOfLengths = (sumOfLengths + firstName.length); 
    averageLength =sumOfLengths / names.length;
});
console.log("The average number of letters is these names is " + averageLength);

//2b use a loop to iterate through array and concatenate all names, separated by spaces
let allNamesTogether = "";
for(firstName of names) { 
    allNamesTogether = allNamesTogether + " " + firstName;
}
console.log("All of the names are: " + allNamesTogether);

//3 How do you access the last element of an array?
let lastElementName = names[names.length-1];
console.log(lastElementName);

//4 How do you access the first element of an array?
let firstElementName = names[0];
console.log(firstElementName);

//5 Create a new array nameLengths. Write a loop to create a new array that contains the lengths of each name
let nameLengthsArray = [];

for (i = 0; i < names.length; i++){
    nameLengthsArray.push(names[i].length);
}
console.log("A new array with lengths of all the names: " + nameLengthsArray);


//6 loop to calculate sum of all name lengths in the array
//Trick question! This was already completed in step 2a, and violates DRY (don't repeat code).
console.log("The sum of all the name lengths is " + sumOfLengths);

//7 Write a function that takes two parameters, "word" and n and returns the word concatenated to itself n number of times.

function repeatWords(word, n){
    
    let j = 0;
    let repeatWordNTimes = "";
 
    do {

        repeatWordNTimes = repeatWordNTimes + word;
        j++;
    } while(j < n);
    
    console.log(repeatWordNTimes);
}

//8

