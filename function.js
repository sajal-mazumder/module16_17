


// declare a function

// function goToSchool(){
//     console.log('wake up from sleep');
//     console.log('take your breakfast');
//     console.log('be ready for school');
//     console.log('go to school');
// }

// call the function : without call the function code will not execute 
// let school = goToSchool();
// console.log(school);
// goToSchool();

// functio name (parameter){code block}

// function sqaure(number){
//     let numSquare = number * number;
//     console.log(numSquare);
// }
// sqaure(45);

// function cube(number){
//     let cubeNum = number * number * number;
//     console.log(cubeNum);
// }
// cube(4);

// function bodmas(a, b, c, d, e){
//     let result = a + b - c * d / e;
//     console.log(result);
// }
// bodmas(25, 10, 2, 40, 20);

// conditional return function

// function isEven(number){
//     if (number % 2 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(23));
// console.log(isEven(40));


// function isEven(number){
//     if (number % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(56));
// console.log(isEven(67));


// function declaration and check string

// function isEvenStr (str){
//     console.log(str);
//     let size = str.length;
//     // console.log(str, size)
//     if (size % 2 === 0) {
//         // console.log('word size is even');
//         return true;
//     }
//     else{
//         // console.log('word size is odd');
//         return false;
//     }
// }

// isEvenStr('borsa');
// console.log(isEvenStr('sajal'));


// using boolean in function

// function doubleOrTriple(number, doDouble){
//     if (doDouble === true ) {
//         let result = number * 2;
//         return result;
//     }
//     else{
//         let result = number * 3;
//         return result;
//     }
// }
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(7, false));


// using array into a function

// function isArr(number){
//     let length = number.length;
//     return length;
// }
// console.log(isArr([2, 3, 4, 5, 6, 5, 44, 43, 33, 456, 6544, 433]))

// // access an object property using function

// function isObject(person){
//     let age = person.age;
//     let hobby = person.hobby;
//     // return age;
//     return hobby;
// }
// console.log(isObject({name: 'sajal', age: 34, hobby: 'playing'}))



// array operation : sum of array elements

// function sumOfArr(numbers){
//     // console.log(numbers); // access the array bcz numbers parameter is set by nums;
//     let sum = 0;
//     for(let num of numbers){
//         // console.log(num); // access all elements individually
//         sum = sum + num;
//     }
// //    return numbers;
// return sum;
// }

// // let nums = [3, 555, 54, 332, 33567, 54, 544];
// let nums2 = [33, 4444, 5, 5343, 4, 6677, 4332]
// // let sum = sumOfArr(nums);
// let sum = sumOfArr(nums2);
// console.log('sum of number is : ', sum);



// sum of even numbers in a array using function

function evenNumbers(numbers){
    // console.log(numbers) // returns full array names nums2;
    let evens = [];
    let sum = 0;
    for(let num of numbers){
        if (num % 2 === 0) {
            // console.log(num); // access all even numbers elements separately
            evens.push(num);
            sum = sum + num;
        } 
    } 
    // return evens;
    return sum;
}

let nums2 = [2, 3, 4, 5, 6, 7];
let sum = evenNumbers(nums2);
let evens = evenNumbers(nums2);
// console.log( 'array of even numbers :', evens);
console.log('sum of even numbers :', sum)

