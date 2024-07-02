// Função para obter dados do localStorage
function getLocalStorageData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Função para salvar dados no localStorage
function setLocalStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Ler bikes do localStorage
function leBikes() {
    return getLocalStorageData('db');
}

// Ler carrinho do localStorage
function leCarrinho() {
    return getLocalStorageData('cart');
}

// Salvar carrinho no localStorage
function salvaCarrinho(cart) {
    setLocalStorageData('cart', cart);
}

// Exibir bikes na página
function renderBikeCards() {
    let objBikes = leBikes();
    let listaBikes = document.getElementById('listaBikes');
    listaBikes.innerHTML = '';

    objBikes.Bikes.forEach((bike, index) => {
        let card = `
        <div class="card" style="width: 150px;">
        <img src="${bike.Imagem}" class="card-img-top" alt="Bike">
        <div class="card-body">
            <p class="card-text">${bike.Marca}</p>
            <p class="card-text">R$ ${bike.valor}</p>
        </div>
    </div>
        `;
        listaBikes.innerHTML += card;
    });
    
}


// Função para adicionar bike ao carrinho
function Addcart(index) {
    let objBikes = leBikes();
    const bike = objBikes.Bikes[index];
    const cart = leCarrinho();
    cart.push(bike);
    salvaCarrinho(cart);
    renderCartItems();
}

// Função para remover bike do carrinho
function removeFromCart(index) {
    const cart = leCarrinho();
    cart.splice(index, 1);
    salvaCarrinho(cart);
    renderCartItems();
}

// Função para exibir itens do carrinho
function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cart = leCarrinho();
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = `
            <li>
                ${item.Marca} 
                <button type="button" onclick="removeFromCart(${index})">Remover</button>
            </li>
        `;
        cartItems.innerHTML += listItem;
    });
}

// Exibir as bikes e os itens do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderBikeCards();
    renderCartItems();
});

document.addEventListener(Addcart),
renderBikeCards