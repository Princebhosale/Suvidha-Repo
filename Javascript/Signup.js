document.getElementById('signup-form').addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent the form from submitting

	// Get the form data
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirm-password').value;

	// Do some basic validation
	if (username === '' || email === '' || password === '' || confirmPassword === '') {
		alert('Please fill out all fields.');
		return;
	}
	if (password !== confirmPassword) {
		alert('Passwords do not match.');
		return;
	}

	// Perform an AJAX request to create the user
	// Replace this with your own server-side code
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/api/signup');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			alert('User created successfully!');
		} else {
			alert('Error creating user.');
		}
	};
	xhr.send(JSON.stringify({
		username: username,
		email: email,
		password: password
	}));
});
