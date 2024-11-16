(function() {
    emailjs.init("ui3gOzaS0U19gZI4i"); // Replace with your actual EmailJS public key
})();

document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("body");
    const feedbackMessage = document.getElementById("message");

    // Clear previous messages
    feedbackMessage.style.display = "none";
    feedbackMessage.innerText = "";

    // Validate required fields
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        feedbackMessage.style.display = "inline-block";
        feedbackMessage.style.backgroundColor = "red";
        feedbackMessage.innerText = "Please fill in all required fields.";
        return;
    }

    emailjs.send("service_a30fbia", "template_m7ahfhj", {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    })
    .then(function(response) {
        // Clear form fields after a successful message send
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";

        // Show success message in green
        feedbackMessage.style.display = "inline-block";
        feedbackMessage.style.backgroundColor = "green";
        feedbackMessage.innerText = "Message sent successfully!";
        
        // Hide message after 5 seconds
        setTimeout(() => {
            feedbackMessage.style.display = "none";
        }, 5000);
    }, function(error) {
        // Show error message in red
        feedbackMessage.style.display = "inline-block";
        feedbackMessage.style.backgroundColor = "red";
        feedbackMessage.innerText = "Failed to send message.";

        // Hide message after 5 seconds
        setTimeout(() => {
            feedbackMessage.style.display = "none";
        }, 5000);
    });
});
