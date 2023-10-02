document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");

    emailForm.addEventListener("submit", function(event) {
        const emailInput = document.getElementById("email");
        const email = emailInput.value;
        const error = document.getElementById("error");

        console.log(email);

        if(!validateEmail(email)) {
            event.preventDefault();
            error.textContent = "Please enter a valid email address.";
        }

        else {
            error.textContent = " ";
        }
    });

    const validateEmail = (email) => {
        let regularExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return regularExpression.test(email)
    }
});
