// Form Validation
let form = document.getElementById('loginForm');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username.length < 5) {
        alert("Username must be at least 5 characters long.");
    }
    else if(password.length < 8) {
        alert("Password must be at least 8 characters long.");
    }
    else {
        alert("Form submitted successfully!");
        form.style.display = 'none'; 
    }
});

// Show/Hide Password Toggle;
togglePasswordVisibility = () => {
    let passwordField = document.getElementById('password');
    if (passwordField.type === 'password'){
        passwordField.type = 'text';
    }
    else {
        passwordField.type = 'password';
    }
}

// Dark Mode Toggle  

let theme = document.getElementById('themeToggle')
let lbl = document.getElementById('themeLabel') 

theme.onclick = () => {
    if (document.body.style.backgroundColor === 'navy'){
        document.body.style.backgroundColor = 'azure';
        lbl.textContent = 'Dark Mode';
        document.body.style.color = 'navy';
    }
    else {
        document.body.style.backgroundColor = 'navy';
        lbl.textContent = 'Light Mode'; 
        document.body.style.color = 'azure'; 
    } 
}

// Add More Text Button
let more = document.getElementById('more-btn');
let newText = document.getElementById('New');

more.onclick = () => {
    newText.textContent += "This text was just added.";
}

// Button Hover Effect
let buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightgreen';
    });
    buttons[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Reset on mouse out
    });
}