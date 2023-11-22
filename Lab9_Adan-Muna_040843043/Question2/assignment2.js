// Initialize the variables
var submitBtn = null;

// Get the Submit Button and the link to the contacted page
submitBtn = document.getElementById("submitBtn");

// Some error handling
if (submitBtn) {
    // Listen for the "click" event on the button; when someone clicks it, run function sendComments(e)
    submitBtn.addEventListener("click", sendComments, false);
} else {
    console.error("Did not get the submit button for some reason.");
}

function sendComments(e) {
    // This is the message we want added to the aria live region
    var msg = "Thank you for sending your comments. Your comments have already been thrown into the dustbin of the Interwebs, and will be ignored at once!";
    
    // Create a status message element
    var statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = msg;
    
    // Prevent the default form submission
    e.preventDefault();
    
    
}
