const person = {
    name: 'John',
    age: 87,
    gender: 'M'
};
console.log(person);



// let cp = person; // deep copy
// cp.age = 23;
// console.log(person);
// console.log(cp);


let cp = {...person, age, 23}; // used highly in react (shallow copy)
cp.age = 23;
console.log(person);
console.log(cp);
