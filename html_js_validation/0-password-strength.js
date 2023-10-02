document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("passwordForm");

    form.addEventListener("submit", function(event) {
        
        const passwordInput = document.getElementById("password");
        const password = passwordInput.value;
        const error = document.getElementById("error");

        if(!validatePassword(password)) {
            event.preventDefault();
            error.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character(!@#$%^&*)";
        }

        else {
            error.textContent = " ";
        }
    });

    
    const validatePassword = (password) => {
        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        return regularExpression.test(password);
    };
});
