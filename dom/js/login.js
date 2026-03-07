const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#loginForm');
const alertMessage = document.querySelector('#alertMessage');

window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting and refreshing the page
        const email = emailInput.value;
        const password = passwordInput.value;


        console.log("Email:", email);
        console.log("Password:", password);

        // Validations
        if (!email || !password) {
            alertMessage.textContent = "Please fill in all fields.";
            alertMessage.style.color = "red";
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alertMessage.textContent = "Please enter a valid email address.";
            alertMessage.style.color = "red";
            return;
        }

        if (password.length < 6) {
            alertMessage.textContent = "Password must be at least 6 characters long.";
            alertMessage.style.color = "red";
            return;
        }

        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const foundUser = users.find(user => user.email === email && user.password === password);
        console.log("Found User:", foundUser);

        if (foundUser) {
            alertMessage.textContent = "Login successful!";
            alertMessage.style.color = "green";
            window.location.href = "dashboard.html";
        } else {
            alertMessage.textContent = "Invalid email or password.";
            alertMessage.style.color = "red";
        }
    });
});