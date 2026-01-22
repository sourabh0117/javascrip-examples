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
//person.forEach(p => console.log(p));

const v = function abc (p){ // fundction store in v we can directly use v as funtion name
    console.log('Hi');
    console.log(p);
}

person.forEach(v); // used for each loop and 