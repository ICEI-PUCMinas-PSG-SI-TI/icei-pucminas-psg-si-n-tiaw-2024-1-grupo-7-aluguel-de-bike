document.getElementById('loginButton').addEventListener('click', fazerLogin);

async function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    try {
        // Carregar credenciais do arquivo JSON
        const response = await fetch('testelogin.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        const credenciais = await response.json();

        // Verificar as credenciais
        var loginValido = false;
        for (var i = 0; i < credenciais.length; i++) {
            if (credenciais[i].email === email && credenciais[i].senha === senha) {
                loginValido = true;
                break;
            }
        }

        if (loginValido) {
            window.location.href = '/HTML - Easy Mov/ADM - Andre/Logado.html';
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
    }
}
