const correctPassword = "MYCRUSH"; // Replace with your chosen password
const passwordInput = document.getElementById("password");
const contentDiv = document.getElementById("content");
const passwordForm = document.getElementById("password-form");

document.getElementById("submit-button").addEventListener("click", function() {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === correctPassword) {
        contentDiv.classList.remove("hidden");
        passwordForm.style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
