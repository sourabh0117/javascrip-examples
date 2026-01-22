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

const names = person.map((p, i) => {
    return i + ". "+p.name;
});

console.log(names);



