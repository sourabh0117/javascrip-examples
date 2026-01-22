// const person = {
//     name: "Tommy",
//     age: 2,
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);

// const jsonPerson = JSON.stringify(person, null, 2);
// console.log(JSON.parse(jsonPerson));


//array of object
const person =  [
    {
        name: "Tommy",
        age: 2,
    },
    {
        name: "pluto",
        age: 3,
    },
]


console.log(person);


const jsonPerson = JSON.stringify(person, null, 2);
console.log(JSON.parse(jsonPerson));