// Ensure the page is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  
    // Handle the registration form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from reloading the page
  
        // Collect input values from the registration form
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
  
        // Simple validation to ensure all fields are filled out
        if (!firstName || !lastName || !email || !password) {
          alert('All fields are required. Please complete the form.');
          return;
        }
  
        // Create a user object to store the details
        const user = {
          firstName,
          lastName,
          email,
          password,
        };
  
        // Save the user data to local storage
        localStorage.setItem('user', JSON.stringify(user));
        alert('You have registered successfully! You can now log in.');
  
        // Redirect to the login page
        window.location.href = 'login.html';
      });
    }
  
    // Handle the login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from reloading the page
  
        // Collect input values from the login form
        const loginEmail = document.getElementById('loginEmail').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();
  
        // Retrieve the user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));
  
        // Verify the entered credentials against stored data
        if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
          alert(`Welcome, ${storedUser.firstName}! You have logged in successfully.`);
          window.location.href = 'home.html'; // Redirect to the home page
        } else {
          alert('The email or password you entered is incorrect. Please try again.');
        }
      });
    }
  });
  