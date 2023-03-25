const leitorFibonacci = document.querySelector("[id=leitorFibonacci]");
const verificaFibonacci = document.querySelector("[id=verificaFibonacci]");
const textoResposta = document.querySelector("[id=textoResposta]");

leitorFibonacci.min = 0;
leitorFibonacci.max = 100;
leitorFibonacci.addEventListener("input", () => {
    let isNegativo = leitorFibonacci.value < 0;
    let isMaiorQue100 = leitorFibonacci.value > 100;
    
    if(isNegativo){
        leitorFibonacci.value = Math.abs(leitorFibonacci.value);
    }else if(isMaiorQue100){
        leitorFibonacci.value = 100;
    }
})

const sequenciaFibonacci = [];
let valorAnterior = 0, valorSoma = 1, valorNovo = 0;
sequenciaFibonacci.push(valorAnterior);
sequenciaFibonacci.push(valorSoma);
while(valorNovo < 89){
    valorNovo = valorAnterior + valorSoma;
    sequenciaFibonacci.push(valorNovo)
    valorAnterior = valorSoma;
    valorSoma = valorNovo;
}
// sequenciaFibonacci.forEach(n => console.log(n))
// console.log(sequenciaFibonacci)

function verificaValorFibonacci(){
    let valorLido = parseInt(leitorFibonacci.value);
    let isValorDeFibonacci = sequenciaFibonacci.includes(valorLido);
    if(isValorDeFibonacci){
        textoResposta.innerHTML = `O valor ${valorLido} faz parte da sequencia Fibonacci. <br>A sequencia é ${sequenciaFibonacci.join(" - ")}`
    }else{
        textoResposta.innerHTML = `O valor ${valorLido} não faz parte da sequencia Fibonacci.`
    }
}

verificaFibonacci.addEventListener("click", () => {
    verificaValorFibonacci()
})




