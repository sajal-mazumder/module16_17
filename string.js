

// // different types of declaring string

/**
 * 1. string is immutable: it means we can not change or update a string index
 * 2. we can calculate string length as like as array
 * 3. we can find any letter or space by using index
 * 4. string is case sensitive
 * 5. trim : to remove unexpected spaces at the starting or ending of the string
 * 6. toLowerCase or toUpperCase: to equalize the string and check equality
 * */ 

// let name = ' Sajal';
// let address = "Sandwip";
// let homeDistrict = `Chattagram`;
// let homeDivision = new String('Chattagram'); // rare case use
// console.log(typeof homeDivision);
// console.log(homeDivision);

// console.log(homeDistrict.length);
// console.log(homeDistrict[3]);
// name[2] = 'k'; // can not update 
// console.log(name); // output previous


// let country = 'bangladesh';
// let motherLand = 'BanglaDesh';

// if (country === motherLand) {  // string are not equal
//     console.log('we are Bangladeshi');
// }else{
//     console.log('we are local mad')
// }

// if (country.toLowerCase() === motherLand.toLowerCase()) {
//     console.log('we are Bangladeshi');
// }else{
//     console.log('we are local mad')
// } // now the string are equal

// let book = ' bangla';
// let boi = 'Bangla  ';

// if (book.toLowerCase().trim() === boi.toLowerCase().trim() ) {
//     console.log('i read bangla ')
// }else{
//     console.log('no book reading')
// }

// if (book.toUpperCase().trim() === boi.toUpperCase().trim() ) {
//     console.log('i read bangla ')
// }else{
//     console.log('no book reading')
// }

// slice, split, splice, join, includes method

// let country = 'america, bangladesh, india';
// console.log(country.slice(1,4)); // slice
// console.log(country.split());
// console.log(country.split(''))
// console.log(country.split(' '))
// console.log(country.split('|')) // not working
// console.log(country.split('_')) // not working


// let countryArr = ['bangladesh', 'india', 'america', 'nepal'];
// let countryArray = ['brasil', 'argentina', 'belgium', 'france']
// console.log(countryArr.join());
// console.log(countryArr.join(' '))
// console.log(countryArr.join('|'))

// let concatArr = countryArray.concat(countryArr);
// console.log(concatArr);
// console.log(countryArr.concat(countryArray));

// let countryArr1 = ['bangladesh', 'india', 'america', 'nepal'];
// splice : The splice() method follows this syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// countryArr1.splice(0, 1,'dhaka');
// console.log(countryArr1);

// console.log(countryArr1.includes('v')); // false : bcz not exists
// console.log(countryArr1.includes('a')); // false: not an element
// console.log(countryArr1.includes('india')); // true: an element

// reverse string *********
// three ways ###

// 01

// let sentence = 'I am a Bangladeshi and I am a Web Developer.';
// let reverse = '';
// for(const letter of sentence ){
//     // console.log(letter); // shows every letter separately
//     // action for reverse
//     reverse = letter + reverse ;
//     // console.log(reverse); // shows result as a loop
// }
// console.log(reverse);

// way 02

// let sentence1 = 'I am a Bangladeshi and I am a Web Developer.';

// let reversE = '';
// for (let index = 0; index < sentence1.length; index++) {
//     // console.log(index); // shows total index number of string
//     // console.log(sentence1[index]); // shows every letter by its index
//     let reverseLetter = sentence1[index];
//     reversE = reverseLetter + reversE;
//     // console.log(reversE); // shows its result as loop
// }
// console.log(reversE); // shows only reverse result for one time

 // way 3: using split method:
/**
 * split converts a string to an array. then we can reverse array by using reverse method and to get original string as its reverse mode we can use join method
 * */  

// this is shortcut rule

// let sentence2 = 'I am a Bangladeshi and I am a Web Developer.';

// let reversed = sentence2.split();
// console.log(reversed); // result as an array but not separate

// let reverseD = sentence2.split('')
// console.log(reverseD); // find every letter separately as an array with comma


// let reverSeD = sentence2.split(' ')
// console.log(reverSeD); // find every element separately as an array element


// let reverSeD = sentence2.split(' ').join()
// console.log(reverSeD); // return as string with comma


// let reVerSeD = sentence2.split(' ').join('');
// console.log(reVerSeD); //  shows result as a word


// let reVerSed = sentence2.split(' ').join(' ');
// console.log(reVerSed); //  shows result every word separately


// let reVErSed = sentence2.split(' ').reverse().join(' '); // split space
// console.log(reVErSed); //  reverse every word

// let reVErSed = sentence2.split(' ').reverse().join(' ');
// console.log(reVErSed); //  reverse every word

// let reVErSed = sentence2.split('').reverse().join(' '); // no split space
// console.log(reVErSed); //  reverse every single character