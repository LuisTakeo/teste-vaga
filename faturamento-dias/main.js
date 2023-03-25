const textoDiasComFatura = document.querySelector("#diasFaturaAcimaMedia");
const textoDiaMenorFatura = document.querySelector("#diaMenorFatura");
const textoDiaMaiorFatura = document.querySelector("#diaMaiorFatura");
const textoMediaMensal = document.querySelector("#mediaMensal");


(async () => {
    try{
        const recebeJson = await fetch('dados.json');
        const jsonDados = await recebeJson.json();
        
        const diasComRenda = jsonDados.filter(dado => dado.valor > 0);
        const diasMedia = diasComRenda.length;
        
        const valorTotal = diasComRenda.reduce((acc, data) => acc + data.valor, 0);
        const mediaMensal = valorTotal / diasMedia;
        const diasAcimaFaturaMedia = diasComRenda.filter(data => data.valor > mediaMensal);
        const diaMenorValor = diasComRenda.reduce(
            (acc, data) => data.valor < acc.valor ? data : acc, 
            diasAcimaFaturaMedia[0]
        )        
        const diaMaiorValor = diasComRenda.reduce(
            (acc, data) => data.valor > acc.valor ? data : acc, 
            diasAcimaFaturaMedia[0]
        )

        textoMediaMensal.innerHTML = `<li>Dias contabilizados: ${diasMedia}. </li>`;
        textoMediaMensal.innerHTML += `<li>Média mensal: R$${mediaMensal.toFixed(2)} </li>`;
                
        diasAcimaFaturaMedia.forEach(data => {
            textoDiasComFatura.innerHTML += `<li>Dia ${
                data.dia}. Valor: R$${data.valor.toFixed(2)}</li>`
        });

        textoDiaMenorFatura.innerHTML = 
        `<li>Dia ${diaMenorValor.dia}. Valor: R$${diaMenorValor.valor.toFixed(2)}</li>`;
        textoDiaMaiorFatura.innerHTML = 
        `<li>Dia ${diaMaiorValor.dia}. Valor: R$${diaMaiorValor.valor.toFixed(2)}</li>`;

    }catch(e){
        console.log(e)
    }
})()

