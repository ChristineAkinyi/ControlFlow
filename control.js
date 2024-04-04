// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function multiply (numbers){
    const multiplyBySelf = numbers.slice(0,4).map( item => item * item);
    const addLastTwo = numbers.slice(-2).map(item => item + 10);
    const middleElements = numbers.slice(4,6);
    const newArray = [...multiplyBySelf, ...middleElements, ...addLastTwo]
    // const newArray = multiplyBySelf.concat(addLastTwo);
    return newArray;
}

console.log(multiply([2,5,7,4,3,1,9,20]));

// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

const numbers = (arrNum) => {
    let i = 0;
    while(i < arrNum.length){
        if (i === 4){
            break;
        }
        console.log(arrNum[i]);
        i++;
    }
};
let arrNum = [1,2,3,4,5,6,7,8,9];
numbers(arrNum);

// Write a function that takes in an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

const fruitsContinue = (arr) => {
    for (let i=0; i <arr.length; i++){
        if (i === 2){
            continue;
        }
        console.log(arr[i]);
    }
};

let fruits= ['apple','plum','banana','strawberries','kiwi']
fruitsContinue(fruits);

// Write a function that accepts an array of strings and console.logs each element using a for loop.
 function logStrings(arr){
    for (let i=0; i <arr.length; i++){
        console.log(arr[i]);
    }
 }; 

 let stringsArr = ["Breathe", "Walks", "Talks", "Jumps"]
 logStrings(stringsArr);

//  Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

function reverseString(str){
    let reversedStr = '';
    let i = str.length-1;

    while (i >= 0){
        reversedStr += str[i];
        i--;
    }

    return reversedStr;
};
  let string = "Christine";
  console.log(reverseString(string));








