const pinNumber  = 1234;

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const bankAccountNumberInt = parseInt(document.getElementById("account-number").value)
    const pinNumberInt = parseInt(document.getElementById("add-pin").value)

    if(accountNumber.length < 11)
    {
        alert("Enter your account number");
        return;
    }
    if(pinNumberInt !== pinNumber)
    {
        alert("Check pin number")
        return;
    }
    if(pinNumberInt == pinNumber)
    {
        const taka = parseInt(document.getElementById("available-balance").innerText)
        const add = parseInt(document.getElementById("add-amount").value)

        const newTaka = taka + add
        document.getElementById("available-balance").innerText = newTaka;
        //console.log(newTaka);
    }
})

document.getElementById("cash-out-btn").addEventListener("click",function(e){
    e.preventDefault();
    const accountNumber = document.getElementById("agent-number").value;
    const bankAccountNumberInt = parseInt(document.getElementById("account-number").value)
    const pinNumberInt = parseInt(document.getElementById("add-pin").value)

    if(accountNumber.length < 11)
    {
        alert("Enter your account number");
        return;
    }
        const taka = parseInt(document.getElementById("available-balance").innerText)
        const add = parseInt(document.getElementById("cash-out-amount").value)

        const newTaka = taka - add
        document.getElementById("available-balance").innerText = newTaka;
        //console.log(newTaka);
    
})
// toggling feature

// function handleToggle(id) {
//     const forms = document.getElementsByClassName("form")
//     for(const form of forms){
//         form.style.display = "none"
//     }
//     document.getElementById(id).style.display = "block"
// }
function handleToggle(id) {
    const parent = document.querySelector(".all-form-sections");

    // Always remove the hidden class (show the parent box)
    parent.classList.remove("hidden");

    // Hide all forms first
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = "none";
    }

    // Show the selected form
    document.getElementById(id).style.display = "block";
}


document.getElementById("add-button").addEventListener("click", function (e) {
    handleToggle("add-money-parent")
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent")
  });

document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent")
  });

document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent")
  });