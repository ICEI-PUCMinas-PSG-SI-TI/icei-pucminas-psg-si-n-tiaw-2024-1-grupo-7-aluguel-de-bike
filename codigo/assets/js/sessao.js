function leBikes() {
    let logado = localStorage.getItem('logado');

    if (logado !== "true") {
        alert('Usuario não autenticado, favor realizar login!');    
        window.location.href= '../pages/login.html';
    }
}