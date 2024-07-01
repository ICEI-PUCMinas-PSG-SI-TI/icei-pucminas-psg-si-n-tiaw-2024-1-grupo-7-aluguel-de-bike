function generateCards() {
    let data = JSON.parse(localStorage.getItem('db'));
    console.log("PRODUTOS  " + JSON.stringify(data));
    const cardContainer = document.getElementById('products');
    data.Bikes.forEach((item, index) => {
        const cardHtml = `
            <div class="col">
                <div class="card h-100">
                    <img class="card-img-top" src="${item.Imagem}" alt="Card image cap">
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">${item.valor} <small class="text-muted">/mês</small></h1>
                        <h5 class="card-title">${item.Marca}</h5>
                        <p class="card-text">${item.Descricao}</p>
                         <div class="mb-3 input_box">
                            <label for="quantBike${index}">Quantidade de Bikes</label><br>
                            <input type="number" id="quantBike${index}" name="quantBike" required><br>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block alugar-btn"
                                data-marca="${item.Marca}"
                                data-valor="${item.valor}"
                                data-descricao="${item.Descricao}"
                                data-quantidade-id="quantBike${index}">
                            Alugar
                        </button>
                    </div>
                </div>    
            </div>    
        `;
        cardContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    document.querySelectorAll('.alugar-btn').forEach(button => {
        button.addEventListener('click', alugar);
    });
}

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

    let button = event.target;
    let strMarca = button.getAttribute('data-marca');
    let strValor = button.getAttribute('data-valor');
    let strDescricao = button.getAttribute('data-descricao');
    let quantidadeId = button.getAttribute('data-quantidade-id');
    let strQuantidade = document.getElementById(quantidadeId).value;

    var estoque = await verificaEstoque(strMarca, strDescricao, strQuantidade);

    if(!estoque) return;

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

async function verificaEstoque(marca, descricao, qtd) {
    let db = JSON.parse(localStorage.getItem('db'));
    let bike = db.Bikes.find(bike => bike.Marca === marca && bike.Descricao === descricao);

    if (bike.Disponiveis <= 0 || bike.Disponiveis < qtd) {
        alert('Bikes com estoque indisponivel');
        return false;
    }

    if (bike) {
        bike.Disponiveis -= qtd;
        bike.Alugadas += Number(qtd);
        localStorage.setItem('db', JSON.stringify(db));
        console.log('Bike atualizada com sucesso:', bike);
    } else {
        console.log('Bike não encontrada:', marca);
    }

    return true;
}

generateCards();
