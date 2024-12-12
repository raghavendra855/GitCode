function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("dobError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("programError").textContent = "";

    // Full Name validation
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Full Name is required.";
        isValid = false;
    }

    // Date of Birth validation
    const dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").textContent = "Date of Birth is required.";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    if (phone.trim() === "" || phone.length < 10) {
        document.getElementById("phoneError").textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    // Program selection validation
    const program = document.getElementById("program").value;
    if (program === "") {
        document.getElementById("programError").textContent = "Please select a program.";
        isValid = false;
    }

    // If the form is valid, show an alert and prevent the page from reloading
    if (isValid) {
        alert("Application submitted successfully!");
        // Optional: Submit the form data here, if needed
        return false;  // Prevents form submission and page reload
    }

    return isValid; 
}
