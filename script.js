document.addEventListener("DOMContentLoaded", function() {

const userDetails = JSON.parse(localStorage.getItem("userDetails"));
const elementToHide = document.getElementById("elementToHide");

elementToHide.style.display = 'none';

if(userDetails){
    console.log("present1: ",userDetails);
    elementToHide.style.display = 'block';
    document.getElementById("firstName").textContent=userDetails.firstName;
    console.log("10: ",userDetails.firstName);
    document.getElementById("lastName").textContent=userDetails.lastName;
    document.getElementById("country").textContent=userDetails.country;
    document.getElementById("phoneNumber").textContent=userDetails.phoneNumber;
    document.getElementById("state").textContent=userDetails.state;
    document.getElementById("city").textContent=userDetails.city;
    document.getElementById("village").textContent=userDetails.village;
    console.log("present: ",userDetails);
    
}
else{
    console.log("else: ",userDetails);
    storeInfo();
}


function storeInfo(){
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name");
    const country = prompt("Enter your country");
    const phoneNumber = prompt("Enter your phone number");
    const state = prompt("Enter your state");
    const city = prompt("Enter your city");
    const village = prompt("Enter your village");
    
    const userDetails1 = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };
    console.log("function: ",userDetails1);

    localStorage.setItem("userDetails", JSON.stringify(userDetails1) );
    elementToHide.style.display='block';
    document.getElementById("firstName").textContent=userDetails1.firstName;
    document.getElementById("lastName").textContent=userDetails1.lastName;
    document.getElementById("country").textContent=userDetails1.country;
    document.getElementById("phoneNumber").textContent=userDetails1.phoneNumber;
    document.getElementById("state").textContent=userDetails1.state;
    document.getElementById("city").textContent=userDetails1.city;
    document.getElementById("village").textContent=userDetails1.village;
}

// storeInfo();
});
