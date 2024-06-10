async function fetchAndGenerateCards() {
    const bikes = [
        {
            "title": "Caloi",
            "text": "Bibicleta padrão - Melhor em segurança",
            "link": "../assets/js/alugar.js",
            "image": "../assets/images/bicicleta_caloi.png",
            "price": "R$ 80,00"
        },
        {
            "title": "KSW",
            "text": "Bicileta padrão - Melhor Custo Benefício",
            "link": "#",
            "image": "../assets/images/bicicleta_ksw.png",
            "price": "R$ 60,00"
        },
        {
            "title": "GTSM1",
            "text": "Bicicleta padrão - Melhor em tecnologia",
            "link": "#",
            "image": "../assets/images/bicicleta_gtsm.png",
            "price": "R$ 85,00"
        },
        {
            "title": "OGGI",
            "text": "Bicleta padrão - Melhor no Geral",
            "link": "#",
            "image": "../assets/images/bicicleta_oggi.png",
            "price": "R$ 75,00"
        }
        // ,
        // {
        //     "title": "GTSM1",
        //     "text": "Bicicleta eletrica ",
        //     "link": "#",
        //     "image": "../assets/images/bicicleta_eletrica.png",
        //     "price": "R$ 100,00"
        // }
    ];

    generateCards(bikes);
}

function generateCards(data) {
    const cardContainer = document.getElementById('products');
    data.forEach(item => {
        const cardHtml = `
            <div class="col">
                <div class="card h-100">
                     <img class="card-img-top" src="${item.image}" alt="Card image cap">
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title" id="price">${item.price} <small class="text-muted">/mês</small></h1>
                        <h5 class="card-title" id="marca">${item.title}</h5>
                        <p class="card-text" id="description">${item.text}</p>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="alugar()" id="alugar">Alugar</button>
                    </div>
                </div>    
            </div>    
        `;
        cardContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
}

fetchAndGenerateCards();