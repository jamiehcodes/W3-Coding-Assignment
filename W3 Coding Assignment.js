//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.


let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //creating array of numbers and assigning to a variable
console.log(ages[ages.length - 1] - ages[0]) //subtracting the value of the first element (index 0) from the last one

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
console.log(ages[ages.length]=100)
console.log(ages)
console.log(ages[ages.length - 1] - ages[0])

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let total = 0 //my starting total so I can add the elements of the array
for (let i = 0; i < ages.length; i++) {  //starting at 0 for index position on where to start, followed by the condition, and the increment
    total = (total + ages[i])        //adds each number in the array to the total
}
console.log(total/ages.length)      //takes the total and divides it by the number of elements in the array


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']           //making array of names
let total2 = 0                                                         // initial total
names.forEach((name) => {                                           //for each name in the array
    const lettercount = name.length                                 // length of each name
    total2 = total2 + lettercount                                   // iterate through and add the lettercount of each name
})
var average = total2/names.length                                  //take the total of the letters and divide by number of names for average
console.log(average)
//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var ListwComma = names.join(" ")                    //.join returns the array as a string; I'm putting a space as the separator; if not specified, the comma is the default
console.log(ListwComma)


//3.	How do you access the last element of any array?     
var lastElement = names[names.length -1]                   
console.log (lastElement)

// 4.	How do you access the first element of any array?
var firstElement = names [0]
console.log (firstElement)

/*5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:  
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */
let nameLengths =  names.map(function(element) {
    return element.length;
});
console.log(nameLengths)

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = nameLengths.reduce(function(c, d) {
    return c + d;
});
console.log(sum)

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function Repeat (string, count) {
if (count >0) {
return string.repeat(count) } 
else {
    return '';
}}
console.log(Repeat('Hi',3))
console.log(Repeat('Hi',0))


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).


function FullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log (FullName('Jamie', 'Ho'))


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
function GreaterThan100(numbers) {
    let sum= 0;
    for (let i = 0; i < numbers.length; i++){
        sum= sum + numbers [i];
    }
    if (sum > 100) {
        return true; 
     } else {
        return '';
    }
    }
    let input = [500,100]
    let input2 = [25,25]
    console.log(GreaterThan100(input));
    console.log(GreaterThan100(input2))

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

 function Average (Array1) {
    let sum1=0;
 for (let x = 0; x < Array1.length; x++) {
        sum1 = sum1 + Array1[x];
 }
       return sum1/Array1.length}
  
 let list1 = [1,2,3,4,5]
 console.log(Average(list1))
 
// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function CompareTwoArrays (Array1, Array2) {
    let sum1=0;
 for (let x = 0; x < Array1.length; x++) {
        sum1 = sum1 + Array1[x];
 }
    const average1= sum1/Array1.length;
    
    let sum2=0
    for (let x = 0; x < Array2.length; x++) {
        sum2 = sum2 + Array2[x];
    }
    const average2= sum2/Array2.length;

    return average1 > average2
    }
    let Arr1 = [1,2,3,4,5]
    let Arr2 = [6,7,8,9,10]

    console.log(CompareTwoArrays(Arr1, Arr2))
    console.log(CompareTwoArrays(Arr2, Arr1))
  
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50)
 { return true} else { 
    return false
 }
}
console.log(willBuyDrink(true, 11))
console.log(willBuyDrink(false, 11))
console.log(willBuyDrink(true, 9))

// 13.	Write a function called IShouldGoCamping that takes two numbers (Temperature and AssignmentsDue), and returns true if Temperature is greater than 65 and AssignmentsDue is 0.
function IShouldGoCamping (Temperature, Assignments) {
    if (Temperature > 65 && Assignments == 0) {
    return true
} else { return false}
}
console.log(IShouldGoCamping(70,0))
console.log(IShouldGoCamping(90,1))