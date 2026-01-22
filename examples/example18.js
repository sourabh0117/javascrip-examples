const person =  [
    {
        name: "Tommy",
        age: 2,
    },
    {
        name: "pluto",
        age: 3,
    },
];

const names = person.map((p, i) => {//iterate through all the object in array return new array
    return i + ". "+p.name;
});

console.log(names); 



