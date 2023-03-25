const texto = document.querySelector("#textoEntrada");
const respostaInvertido = document.querySelector("#textoInvertido");
const ativar = document.querySelector("#ativar");


const capturaLetras = (txt) => {
    const arr =[];
    for(let i = 0; i < txt.length; i++){
        arr.push(txt[i]);
    }
    return arr;
}

const reverteTexto = (arr) => {
    let txt = "";
    for(let i = arr.length - 1; i >= 0; i--){
        txt += arr[i];
    }
    return txt;
}

ativar.addEventListener("click", () =>{
    let textoRecebido = texto.value;
    let isNullOrUndefined = textoRecebido != null || textoRecebido != undefined;
    let isTexto = textoRecebido.trim().length > 0;
    if(isNullOrUndefined && isTexto){
        let array = capturaLetras(texto.value);
        let textoInvertido = reverteTexto(array);

        respostaInvertido.textContent = textoInvertido;
    }

}) 

