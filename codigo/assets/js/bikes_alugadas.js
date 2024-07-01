async function getProducts() {
    let bikes_alugadas = JSON.parse(localStorage.getItem('bikes_alugadas'));
    let user = localStorage.getItem('usuario_logado');
    let objBikes = [];
    if (bikes_alugadas[user]) {
        objBikes = bikes_alugadas[user];
    }
    generateCards(objBikes);
}


function generateCards(data) {
    const cardContainer = document.getElementById('alugadas');
    data.forEach(item => {
        const cardHtml = `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title" id="price">${item.valor} <small class="text-muted">/mês</small></h1>
                        <h5 class="card-title" id="marca">${item.Marca}</h5>
                        <p class="card-text" id="description">${item.Descricao}</p>
                    </div>
                </div>    
            </div>    
        `;
        cardContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
}

getProducts();