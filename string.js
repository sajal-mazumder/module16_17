

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

let book = ' bangla';
let boi = 'Bangla  ';

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

let country = 'america, bangladesh, india';
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