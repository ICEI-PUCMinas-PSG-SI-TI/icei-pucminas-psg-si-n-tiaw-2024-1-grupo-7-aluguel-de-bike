// Ler bikes do localStorage
function leBikes() {
    let strBikes = localStorage.getItem('db');
    let objBikes = { Bikes: [] };
    if (strBikes) {
        objBikes = JSON.parse(strBikes);
    }
    return objBikes;
}

// Exibir bikes na página
function exibirBikes() {
    let objBikes = leBikes();
    let listaBikes = document.getElementById('listaBikes');
    listaBikes.innerHTML = '';

    objBikes.Bikes.forEach((bike, index) => {
        let card = `
            <div class="col">
                <div class="card" style="width: 18rem; padding: 50px;">
                <h5 class="card-title">${bike.Id}</h5>
                    <img src="${bike.Imagem}" class="card-img-top" alt="Imagem da Bike">
                    <div class="card-body">
                    <h5 class="card-title">${bike.Marca}</h5>
                        <button type="button" class="btn btn-outline-secondary" onclick="editarBike(${index})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>
                        </button>
                        <button type="button" class="btn btn-outline-danger" onclick="removerBike(${index})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </button>
                        <div>
                        R$ ${bike.valor}
                        </div>
                        <div>
                         Estoque: ${bike.Disponiveis}
                        </div>
                    </div>
                </div>
            </div>
        `;
        listaBikes.innerHTML += card;
    });
}

// Função para editar uma bike
function editarBike(index) {
    let objBikes = leBikes();
    objBikes.Bikes()
    console.log("Editar bike de índice:", index);
}

// Função para remover uma bike
function removerBike(index) {
    let objBikes = leBikes();
    objBikes.Bikes.splice(index, 1);
    localStorage.setItem('db', JSON.stringify(objBikes));
    exibirBikes();
}

// Exibir as bikes ao carregar a página
document.addEventListener('DOMContentLoaded', exibirBikes);

