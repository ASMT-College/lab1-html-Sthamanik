document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementsByTagName("form");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const descriptionInput = document.getElementById("description");
    const submitBtn = document.getElementById("submitBtn");

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('errors')) {
        const errors = JSON.parse(decodeURIComponent(urlParams.get('errors')));
        
        // Display errors on the form
        if (errors.name) {
            document.getElementById("nameError").textContent = errors.name;
        }
        if (errors.age) {
            document.getElementById("ageError").textContent = errors.age;
        }
        if (errors.description) {
            document.getElementById("descriptionError").textContent = errors.description;
        }
    }

    function validateField(input, errorElement, validationFn) {
        const value = input.value.trim();
        const errorMessage = validationFn(value);

        errorElement.textContent = errorMessage;
        validateForm(); 
    }

    function validateForm() {
        const isNameValid = nameInput.value.trim().length >= 4;
        const isAgeValid = ageInput.value.trim() !== "" && !isNaN(ageInput.value) && parseInt(ageInput.value) >= 18;
        const isDescriptionValid = descriptionInput.value.trim() !== "";

        submitBtn.disabled = !(isNameValid && isAgeValid && isDescriptionValid);
    }

    nameInput.addEventListener("blur", function () {
        validateField(nameInput, document.getElementById("nameError"), value => 
            value.length < 4 ? "Name must be at least 4 characters long." : ""
        );
    });

    ageInput.addEventListener("blur", function () {
        validateField(ageInput, document.getElementById("ageError"), value => 
            value === "" || isNaN(value) || parseInt(value) < 18 ? "Age must be 18 or older." : ""
        );
    });

    descriptionInput.addEventListener("blur", function () {
        validateField(descriptionInput, document.getElementById("descriptionError"), value => 
            value === "" ? "Description is required." : ""
        );
    });

    form.addEventListener("submit", function (event) {
        validateForm();
        if (submitBtn.disabled) {
            event.preventDefault();
        }
    });
});
