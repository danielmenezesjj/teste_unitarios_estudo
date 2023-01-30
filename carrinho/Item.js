
class Item{
    constructor(nome, valor, quantidade){
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
    }

    pegarValorTotalItem(){
        return this.valor * this.quantidade
    }
}

export default Item