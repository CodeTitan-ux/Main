document.addEventListener("DOMContentLoaded", function() {
    // Create form elements dynamically
    let form = document.createElement("form");
    form.setAttribute("id", "login-form");

    // Heading
    let heading = document.createElement("h2");
    heading.innerText = "Login";
    
    // Email Label and Input
    let emailLabel = document.createElement("label");
    emailLabel.innerText = "Email:";
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "Enter your email");

    // Password Label and Input
    let passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Password:";
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("placeholder", "Enter your password");

    // Login Button
    let loginButton = document.createElement("button");
    loginButton.setAttribute("type", "button");
    loginButton.innerText = "Login";

    // Append elements to form
    form.appendChild(heading);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(loginButton);

    // Append form to login container
    document.getElementById("login-container").appendChild(form);

    // Add event listener to login button
    loginButton.addEventListener("click", function() {
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email.");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
        } else {
            alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);
        }
    });

    // Email validation function
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
