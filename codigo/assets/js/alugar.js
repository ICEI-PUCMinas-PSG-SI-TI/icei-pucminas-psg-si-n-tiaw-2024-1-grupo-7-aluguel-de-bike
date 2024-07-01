// document.getElementById('alugar').addEventListener('click', alugar);

function getBikesAlugadas() {
    let strBikes = localStorage.getItem('bikes_alugadas');
    if (strBikes) {
        objBikes = JSON.parse(strBikes);
        return objBikes;
    }
    return {};
}

async function salvaBikes(dados) {
    localStorage.setItem('bikes_alugadas', JSON.stringify(dados));
}


async function alugar(event) {
    event.preventDefault();
    let logado = localStorage.getItem('logado');
    console.log("Logado ::" + logado);
    if (logado !== "true") {
        alert('Usuario não autenticado, favor realizar login!');
        window.location.href = '../pages/login.html';
        return;
    }

    let objBikesAlugadas = getBikesAlugadas();

    // let strMarca = document.getElementById('Marca').innerText;
    // let strValor = document.getElementById('valor').innerText;
    // let strDescricao = document.getElementById('Descricao').innerText;

    let button = event.target;
    let strMarca = button.getAttribute('data-marca');
    let strValor = button.getAttribute('data-valor');
    let strDescricao = button.getAttribute('data-descricao');

    let novaBike = {
        Marca: strMarca,
        valor: strValor,
        Descricao: strDescricao,
        link: "../assets/js/alugar.js"
    };

    let user = localStorage.getItem('usuario_logado');

    if (!objBikesAlugadas[user]) {
        objBikesAlugadas[user] = [];
    }

    objBikesAlugadas[user].push(novaBike);

    await salvaBikes(objBikesAlugadas);

    alert('Bike alugada com sucesso');
}


