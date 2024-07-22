document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (password.length < 6) {
        showMessage('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    showMessage('Formulario enviado exitosamente.', true);

    setTimeout(function() {
    
        alert("INICIASTE SESION");

       
        window.location.href = '../inicio/pagina-principal.html';
    }, 1000);
});

function showMessage(message, success = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    messageDiv.style.backgroundColor = success ? '#ddffdd' : '#ffdddd';
    messageDiv.style.color = success ? '#4F8A10' : '#d8000c';
    setTimeout(() => messageDiv.style.display = 'none', 3000);
}
