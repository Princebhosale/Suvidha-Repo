document.getElementById('login-form').addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent the form from submitting

	// Get the username and password from the form
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	// Do some basic validation
	if (username === '' || password === '') {
		alert('Please enter your username and password.');
		return;
	}

	// Perform an AJAX request to check the credentials
	// Replace this with your own authentication code
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/api/login');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			alert('Logged in successfully!');
		} else {
			alert('Incorrect username or password.');
		}
	};
	xhr.send(JSON.stringify({
		username: username,
		password: password
	}));
});
