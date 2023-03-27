const leitorFibonacci = document.querySelector("[id=leitorFibonacci]");
const verificaFibonacci = document.querySelector("[id=verificaFibonacci]");
const textoResposta = document.querySelector("[id=textoResposta]");

leitorFibonacci.min = 0;
leitorFibonacci.max = 100;
leitorFibonacci.addEventListener("input", () => {
    const isNegativo = leitorFibonacci.value < 0;
    const isMaiorQue100 = leitorFibonacci.value > 100;
    const isNotANumber = isNaN(parseInt(leitorFibonacci.value)); 
    console.log(isNotANumber)   
    if(isNotANumber){
        leitorFibonacci.value = "";
    }else if(isNegativo){
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

function verificaValorFibonacci(){
    let valorLido = parseInt(leitorFibonacci.value);
    console.log(isNaN(valorLido))
    if(!isNaN(valorLido)){
        let isValorDeFibonacci = sequenciaFibonacci.includes(valorLido);
        if(isValorDeFibonacci){
            textoResposta.innerHTML = `O valor ${valorLido} faz parte da sequencia Fibonacci. <br>A sequencia é ${sequenciaFibonacci.join(" - ")}`;
        }else textoResposta.innerHTML = `O valor ${valorLido} não faz parte da sequencia Fibonacci.;`
    }else{ 
        textoResposta.innerHTML = `Insira um valor valido.`;
    }
}

verificaFibonacci.addEventListener("click", () => verificaValorFibonacci())
leitorFibonacci.addEventListener("keypress", (tecla) => {
    if(tecla.key == "Enter") verificaValorFibonacci();
})



