function togglePassword(id) {
    var passwordField = document.getElementById(id);
    var type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

function cancelForm() {
    // Reset form fields or navigate away
    document.getElementById('passwordForm').reset();
}


function cancelForm() {
    if (confirm('Are you sure you want to cancel?')) {
        document.querySelector('form').reset(); // Reset the form
    }
}
