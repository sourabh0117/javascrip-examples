const user = {
    age: 25,
    name: function(){
        console.log(this.age);
    }
}
user.name();