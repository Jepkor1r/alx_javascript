document.addEventListener("DOMContentLoaded", function() {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFields = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    dynamicForm.addEventListener("submit", function(event){

        event.preventDefault();
        alert("Please fill in all fields");

    });

    numFields.addEventListener("change", function(){

        generateInputFields(parseInt(numFields.value));

    });

    const generateInputFields = (numFields) => {
       inputContainer.innerHTML = "";
       
        for(let i=1; i<=numFields; i++) {

            const input = document.createElement("input");
            input.type = "text";
            input.name = `field${i}`;
            input.placeholder = `field${i}`;
            inputContainer.appendChild(input);
        };
    }

    const validateForm = () => {

        const fieldInputs = inputContainer.querySelectorAll("input[type='text']");
        for(let fieldInput of fieldInputs) {
            if(fieldInput.value.trim() === "") {
                return false;
            }
        }
        return true;
    };
});
