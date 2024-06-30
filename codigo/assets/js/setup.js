let usuarios = [{
    nome: 'Administrador',
    senha: 'Admin123',
    email: 'administrador@adm.com',
    isAdmin: true
}, {
    nome: 'Puc Minas SG',
    senha: 'Puc12345',
    email: 'pucminas@puc.br',
    isAdmin: false
}];

const bikes = {
    Bikes: [
        {
            "Id": "",
            "Imagem": "../assets/images/bicicleta_caloi.png",
            "Marca": "Caloi",
            "Aro": "19",
            "Marcha": "Sim",
            "Freio": "Não",
            "Cesta": "Não",
            "valor": "80",
            "Descricao": "Bicicleta padrão - Melhor em segurança",
            "Disponiveis": "2",
            "Alugadas": 0,
            "Indisponiveis": 0,
            "link": "../assets/js/alugar.js"
        }
    ]
};

console.log("SETUP SUCESS")
localStorage.setItem('usuarios', JSON.stringify(usuarios));
localStorage.setItem('logado', false);
localStorage.setItem('db', JSON.stringify(bikes));