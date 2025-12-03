document.getElementById("loginButton").addEventListener("click",function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberInt = parseInt(document.getElementById("mobile-number").value)
    const pinNumberInt = parseInt(document.getElementById("pin-number").value)
    
    if(pinNumber == pinNumberInt && mobileNumber == mobileNumberInt)
    {
        window.location.href="./home.html"
    }
    else{
        alert("Invalid Credentials!")
    }


})