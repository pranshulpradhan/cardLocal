

const userDetails = localStorage.getItem("userDetails");
const elementToHide = document.getElementById("elementToHide");
elementToHide.style.display = 'none';
if(userDetails){
    document.getElementById("firstName").textContent=userDetails.firstName;
    document.getElementById("lastName").textContent=userDetails.lastName;
    document.getElementById("country").textContent=userDetails.country;
    document.getElementById("phoneNumber").textContent=userDetails.phoneNumber;
    document.getElementById("state").textContent=userDetails.state;
    document.getElementById("city").textContent=userDetails.city;
    document.getElementById("village").textContent=userDetails.village;

    elementToHide.style.display = 'block';
    // elementToHide.style.display = 'none';
}
else{
    // elementToHide.style.display = 'none';
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

    const userDetails = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails) );

    document.getElementById("firstName").textContent=userDetails.firstName;
    document.getElementById("lastName").textContent=userDetails.lastName;
    document.getElementById("country").textContent=userDetails.country;
    document.getElementById("phoneNumber").textContent=userDetails.phoneNumber;
    document.getElementById("state").textContent=userDetails.state;
    document.getElementById("city").textContent=userDetails.city;
    document.getElementById("village").textContent=userDetails.village;
}

// storeInfo();

