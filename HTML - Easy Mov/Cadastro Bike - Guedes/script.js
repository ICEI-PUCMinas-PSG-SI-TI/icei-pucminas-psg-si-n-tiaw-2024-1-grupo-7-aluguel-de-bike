//CADASTRO DE BIKES

    //configurar o ação do botão de cadastro
    document.getElementById('cadastrarBike').addEventListener('click', cadastrarBike);

    //ler bikes
    function leBikes(){
        let strBikes = localStorage.getItem('db')
        let objBikes = {};
        if (strBikes){
            objBikes = JSON.parse (strBikes);
        }

        return objBikes;
    }

    //ler bikes cadastradas
    function salvaBikes (dados){
        localStorage.setItem('db', JSON.stringify (dados));
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
        let strFreio = document.getElementById ('freioBike').value;
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