
const registerBtn = document.querySelector('#registerBtn');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#registerForm');
const alertMessage = document.querySelector('#alertMessage');


window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting and refreshing the page
        const fullName = fullNameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Validations
        if (!fullName || !email || !password) {
            alertMessage.textContent = "Please fill in all fields.";
            alertMessage.style.color = "red";
            return;
        }

        if (fullName.length < 3) {
            alertMessage.textContent = "Full Name must be at least 3 characters long.";
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

        const userData = {
            fullName,
            email,
            password
        };

        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        const existingUser = users.find(user => user.email === email);

        if(existingUser) {
            alertMessage.textContent = "Email is already registered. Please use a different email.";
            alertMessage.style.color = "red";
            return;
        }

        users.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        console.log("Existing Users:", users);
        alertMessage.textContent = "Registration successful!";
        alertMessage.style.color = "green";
        form.reset(); // Clear the form after successful registration

    })
    
});