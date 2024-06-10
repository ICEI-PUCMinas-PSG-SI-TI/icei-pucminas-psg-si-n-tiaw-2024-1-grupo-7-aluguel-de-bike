async function getProducts() {
    let strBikes = localStorage.getItem('db');
    let objBikes = [];
    if (strBikes) {
        objBikes = JSON.parse(strBikes);
    }
    console.log(objBikes.Bikes);
    generateCards(objBikes.Bikes);
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