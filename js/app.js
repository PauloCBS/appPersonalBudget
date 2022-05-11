class Despesa {

    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor; 
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false;
            }   
        }
                return true;
    }
}

class BancoDados{

    constructor(){
        let id = localStorage.getItem('id')
        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1;
    }
    gravar(d) {
        //local sotorage permite adicionar o conteudo a pagina e armazenar;
        //metodo setItem substitui o registro anterior ao inves de adicionar um novo;
        
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
        
    }
}

let bancoDados = new BancoDados()

function cadastrarDespesas() {

    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesa = new Despesa(ano.value, mes.value, dia.value, descricao.value, valor.value);
    console.log(despesa);



    if(despesa.validarDados()){
        console.log('Dados Validos');
    }else{
        console.log('Dados invalidos')
    }
}




