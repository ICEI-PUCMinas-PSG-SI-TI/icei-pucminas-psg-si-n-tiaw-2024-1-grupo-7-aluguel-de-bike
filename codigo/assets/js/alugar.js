// Configurar a ação do botão de cadastro
document.getElementById('alugar').addEventListener('click', alugar);

function leBikes() {
    let strBikes = localStorage.getItem('db');
    let objBikes = { Bikes: [] };
    if (strBikes) {
        objBikes = JSON.parse(strBikes);
    }
    return objBikes;
}

function salvaBikes(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}


function alugar() {
   
    let objBikes = leBikes();

    let strMarca = document.getElementById('marca').innerText;
    let strValor = document.getElementById('price').innerText;
    let strDescricao = document.getElementById('description').innerText;

    let novaBike = {
        Marca: strMarca,
        valor: strValor,
        Descricao: strDescricao
    };

    objBikes.Bikes.push(novaBike);

    salvaBikes(objBikes);
    
    alert('Bike alugada com sucesso');

}


