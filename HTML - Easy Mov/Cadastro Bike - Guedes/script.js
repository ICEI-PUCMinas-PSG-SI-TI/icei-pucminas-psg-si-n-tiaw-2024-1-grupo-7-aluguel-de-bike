//cadastro de clientes

document.getElementById('loginButton').addEventListener('click', fazerLogin);

async function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    try {
        // Carregar credenciais do arquivo JSON
        const response = await fetch('testelogin.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        const credenciais = await response.json();

        // Verificar as credenciais
        var loginValido = false;
        for (var i = 0; i < credenciais.length; i++) {
            if (credenciais[i].email === email && credenciais[i].senha === senha) {
                loginValido = true;
                break;
            }
        }

        if (loginValido) {
            window.location.href = '/HTML - Easy Mov/ADM - Andre/Logado.html';
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
    }
}

//CADASTRO DE BIKES

    //configurar o ação do botão de cadastro
    document.getElementById('cadastrarBike').addEventListener('click', cadastrarBike);

    //ler bikes
    async function leBikes(){
        let strBikes = localStorage.getItem('Bikes')
        let objBikes = {};
        if (strBikes){
            objBikes = JSON.parse (strDados);
        }

        return objBikes;
    }

    //ler bikes cadastradas
    async function salvaBikes (dados){
        localStorage.setItem('Bikes', JSON.stringify (dados));
    }

    //cadastrar bikes
    async function cadastrarBike(){
        //ler dados do localStorage
        let objBikes = leBikes();

        //cadastrar nova bike
        let strImagem = document.getElementById ('imagemBike').value;
        let strMarca = document.getElementById ('marcaBike').value;
        let strAro = document.getElementById ('aroBike').value;
        let strMarcha = document.getElementById ('marchaBike').value;
        let strFreio = document.getElementById ('freiroBike').value;
        let strCesta = document.getElementById ('cestaBike').value;
        let strDescricao = document.getElementById ('descricaoBike').value;
        let novaBike = {
            Imagem: strImagem,
            Marca: strMarca,
            Aro: strAro,
            Marcha: strMarcha,
            Freio: strFreio,
            Cesta: strCesta,
            Descricao: strDescricao
        };
        objBikes.Bikes.push (novaBike);

        //salva as bikes no localStorage novamente
        salvaBikes (objBikes);

        //informar o cadastro efetivado
        alert('Bike cadastrada com sucesso');
    }