

// for of loop : used in array
// for in loop : used in object

let school = {
    name : 'shs',
    location: 'sandwip',
    teachers: 12,
    students: 300,
    groups: ['science', 'arts', 'commerce'],
    class: {
        six: 65,
        seven: 50,
        eight: 76,
        nine: 55,
        ten: 50,
        section:{
            nine: {
                science: 5,
                arts: 30,
                commerce: 22
            },
            ten: {
                science: {
                    boys: 2,
                    girls: 3
                }, 
                arts: {
                    boys: 22,
                    girls: 34
                },
                commerce: {
                    boys: 34,
                    girls: 45
                }
            }
        }
    }
}
// console.log(school)

// for(let keys in school){
//     // console.log(keys); // access all keys in the object
//     console.log(school[keys]); // access all value in the object

// }


// access keys converting array : apply loop using for of

// let keys = Object.keys(school);
// // console.log(keys); // result as an array

// for(let key of keys){
//     // console.log(key); // result as an array loop
//     console.log(key, ": ", school[key]); // result key and value to gather.
// }


// type of declaring object

// normal type

// let person = {
//     name: 'sajal',
//     age: 35,
//     profession: 'teaching'
// } 
// console.log(person.hobby); // undefined

// type 02

// let person1 = new Object({
//     name: 'sajal',
//     age: 35,
//     profession: 'teaching'
// });
// console.log(person1);

// type 03

// let person2 = Object.create({
//     name: 'sajal',
//     age: 35,
//     profession: 'teaching'
// })
// console.log(person2); // this shows empty object
// console.log(Object.getPrototypeOf(person2));  // this shows object result
// console.log(person2.name); // this shows value of name key


