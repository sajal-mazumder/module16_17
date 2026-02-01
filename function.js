


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

function isEven(number){
    if (number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}

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