let userRole = prompt("enter the user role");
let isAuthenticated = prompt("enter the user athenticity");
let userAge = prompt("enter the user age");
if(!isAuthenticated){
    console.log("Please Log in.");
}
if(isAuthenticated && userRole == "Admin"){
    console.log("welcome to Dashboard");
}
if(isAuthenticated && userRole != "Admin"){
    console.log("acess denied");
}
