document.getElementById('loginButton').addEventListener('click', fazerLogin);


function fazerLogin() {
    var email = document.getElementById('inputEmail').value;
    var senha = document.getElementById('inputPassword').value;

    if (validarLogin(email, senha)) {
        alert('Login bem-sucedido!');        
        let usuario = buscarUsuarioPorEmail(email);
        if(usuario.isAdmin){
            console.log("ADMIN");
            window.location.href = '../pages/area_logada_admin.html';
        }else{
            window.location.href = '../pages/area_logada.html';
        }
    
        return;
    }
    alert('Credenciais inválidas. Tente novamente.');
}

function validarLogin(username, password) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    for (let usuario of usuarios) {
        if (usuario.email === username && usuario.senha === password) {
            localStorage.setItem("usuario_logado", usuario.nome);
            localStorage.setItem("logado", true)
            return true;
        }
    }
    return false;
}

function buscarUsuarioPorEmail(email) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    for (let usuario of usuarios) {
        if (usuario.email === email) {
            return usuario;
        }
    }
    return null;
}