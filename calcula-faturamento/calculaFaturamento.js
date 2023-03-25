class Estado{
    nomeEstado
    fatura
    constructor(nomeEstado, fatura){
        this.nomeEstado = nomeEstado;
        this.fatura = fatura;
    }
    getNome(){
        return this.nomeEstado
    }
    getFatura(){
        return this.fatura
    }
    calculaPercento(total){
        let participacao = (this.fatura / total * 100).toFixed(2);
        return `${this.nomeEstado == "Outros" ? "Outros estados participaram" : 
        this.nomeEstado + " participou"} do total mensal da distribuidora com ${participacao}%.`;
    }
}

const estado1 = new Estado("SP", 67836.43);
const estado2 = new Estado("RJ", 36678.66);
const estado3 = new Estado("MG", 29229.88);
const estado4 = new Estado("ES", 27165.48);
const estado5 = new Estado("Outros", 19849.53);

const calculaValorTotal = (...estados) => {
    let total = estados.reduce((acc, estado) => acc + estado.fatura, 0);
    return total;    
}
const mostraPercento = (total, ...estados) => {
    estados.forEach(estado => console.log(estado.calculaPercento(total)))
}
const valorTotal = calculaValorTotal(estado1, estado2, estado3, estado4, estado5);
console.log(`Valor total arrecadado: R$${valorTotal}`)
mostraPercento(valorTotal, estado1, estado2, estado3, estado4, estado5)

// (estado1.fatura / valorTotal * 100).toFixed(2)
