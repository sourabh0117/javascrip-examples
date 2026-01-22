let userRole = "Admin";
let isAuthenticated = false;
let userAge = 15;
if(!isAuthenticated){
    console.log("Please Log in.");
}
if(isAuthenticated && userRole == "Admin"){
    console.log("welcome to Dashboard");
}
if(isAuthenticated && userRole != "Admin"){
    console.log("acess denied");
}
