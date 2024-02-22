                                                                                                                                                                                                                                                                                                                                                                                                                                                            const clock = "MISHRA"; // Replace with your chosen password
const passwordInput = document.getElementById("password");
const contentDiv = document.getElementById("content");
const passwordForm = document.getElementById("password-form");

document.getElementById("submit-button").addEventListener("click", function() {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === clock) {
        contentDiv.classList.remove("hidden");
        passwordForm.style.display = "none";
    } else {
        alert("Incorrect password. Please don't try again😅.");
    }
});









document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
    }
  });





// Function to display custom modal
function openModal() {
    document.getElementById('custom-modal').style.display = 'block';
  }
  
  // Function to close custom modal
  function closeModal() {
    document.getElementById('custom-modal').style.display = 'none';
  }
  
  // Trigger custom modal when Ctrl+U is pressed
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        openModal();
    }
  });

















  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') { // Check if Ctrl + F is pressed
        toggleFullScreen();
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}