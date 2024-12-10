// Form validation function
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset previous error messages
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // If form is valid, alert the user (or handle login here)
    if (isValid) {
        alert('Login successful!');
    }
});

// Show/Hide password functionality
document.getElementById('show-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});