

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
// console.log(school);

// accessing certain property in nested object and updating key value
// console.log(school.groups);

// console.log(school.class.section.ten.arts.boys);
// console.log(school.groups[1]);

// school.groups[1] = 'Arts Faculty';
// console.log(school.groups);

// delete
// delete school.name;
// console.log(school);



