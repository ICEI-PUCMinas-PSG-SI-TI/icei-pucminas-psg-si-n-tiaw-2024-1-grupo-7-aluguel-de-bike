function generateCards() {
    let data = JSON.parse(localStorage.getItem('db'));
    console.log("PRODUTOS  " + JSON.stringify(data));
    const cardContainer = document.getElementById('products');
    data.Bikes.forEach(item => {
        const cardHtml = `
                 <div class="card m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${item.Id}">
                     <img src="${item.Imagem}" class="card-img-top border" id="img200px">
                    <div class="card-body p-1">
                        <h1 class="card-title pricing-card-title" id="price">${item.valor} <small class="text-muted">/mês</small></h1>
                        <h5 class="card-title" id="marca">${item.Marca}</h5>
                        <p class="card-text" id="description">${item.Descricao}</p>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="alugar()" id="alugar">Alugar</button>
                    </div>
                </div>      
        `;
        cardContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
}

generateCards();

{/* <div class="card m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${item.Id}">
        <img src="${item.Imagem}" class="card-img-top border" id="img200px">
        <div class="card-body p-1">
            <p><b>Modelo:</b> ${item.Marca}</p>
            <p><b>Categoria:</b> Bicicletas</p>
            <p><b>Desc:</b> ${descricaoLimitada}</p>
        </div>
    </div> */}


    {/* <div class="col">
                <div class="card h-100">
                     <img class="card-img-top" src="${item.Imagem}" alt="Card image cap">
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title" id="price">${item.valor} <small class="text-muted">/mês</small></h1>
                        <h5 class="card-title" id="marca">${item.Marca}</h5>
                        <p class="card-text" id="description">${item.Descricao}</p>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="alugar()" id="alugar">Alugar</button>
                    </div>
                </div>    
            </div>   */}