document.getElementById('loginButton').addEventListener('click', fazerLogin);

function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
   

    /* Adicionar mais credenciais aqui, juntamente no arquivo Json*/
    var credenciais =  [
        {
            "email": "administrador@adm.com",
            "senha": "Admin123"
        }
        ,
    {
        "email": "Pucminas@puc.br",
        "senha": "Puc12345"
    }
    
    ];

    var loginValido = false;
    for (var i = 0; i < credenciais.length; i++) {
        if (credenciais[i].email === email && credenciais[i].senha === senha) {
            loginValido = true;
            break;
        }
    }
    
    if (loginValido) {
        
        window.location.href = '/HTML - Easy Mov/ADM/Logado.html';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}
