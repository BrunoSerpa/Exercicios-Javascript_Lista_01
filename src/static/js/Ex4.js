document.getElementById("precoTransporte").addEventListener("click", function(event) {
    event.preventDefault();
    let rastreamentoSN = document.querySelectorAll('input[type="radio"][name="rastreamento"]');
    let rastreamento = null
    rastreamentoSN.forEach(resposta => {
        if (resposta.checked) rastreamento = resposta.value
    });
    let numeroPecas = document.getElementById('numeroPecas').value;
    let regiao = document.getElementById('regiao').value;
    let distancia = document.getElementById('distancia').value;
    let litro = document.getElementById('litro').value;
    /* Verificação de Valores */
    try {
        [numeroPecas, distancia, litro] = [parseInt(numeroPecas), parseFloat(distancia), parseFloat(litro)];
        if ([numeroPecas, distancia, litro].some(atributo => atributo === null || isNaN(atributo))) {
            return window.alert("Insira valores!");
        }
        if (!["S", "N"].includes(rastreamento) || !["1", "2", "3"].includes(regiao)) {
            return window.alert("Insira valores válidos!");
        }
    }
    catch{
        return window.alert("Insira valores válidos!");
    }

    /* Se a resposta for “sim”, será cobrada uma taxa de R$ 200,00 */
    let [taxaRastreamento, taxaPecas, taxaQuilometro] = [0, 0, 0]
    if (rastreamento=="S") taxaRastreamento=200
    /* Até mil peças – o valor será conforme a região apresentada*/
    if (numeroPecas<=1000){
        switch (regiao){
            case "1": taxaPecas = numeroPecas * 1.0; break
            case "2": taxaPecas = numeroPecas * 1.2; break
            case "3": taxaPecas = numeroPecas * 1.3; break
        }
    }
    /* Acima de mil peças – valor normal para até mil peças, o número de peças que ultrapassar mil tem desconto conforme a região */
    else {
        switch (regiao){
            case "1": taxaPecas = 1000 * 1.0 + (numeroPecas - 1000) * (1 - 0.10); break
            case "2": taxaPecas = 1000 * 1.2 + (numeroPecas - 1000) * (1.2) * (1 - 0.12); break
            case "3": taxaPecas = 1000 * 1.3 + (numeroPecas - 1000) * (1.3) * (1 - 0.13); break
        }
    }
    /*  A distância para o transporte deve ser informada, pois, para cada quilômetro, é cobrado um litro de combustível*/
    taxaQuilometro = distancia * litro
    /* Ao término, devem ser exibidas as seguintes informações: Taxa do rastreamento: 999,99; Valor do frete pelas peças: 9999.99; Valor do frete por quilômetro: 999.99; Total do frete: 999.99  */
    document.getElementById("resultadoPrecoTransporte").innerText = `Taxa do rastreamento: ${taxaRastreamento},00 \nValor do frete pelas peças: ${parseFloat(taxaPecas).toFixed(2)}\nValor do frete por quilômetro: ${parseFloat(taxaQuilometro).toFixed(2)}\nTotal do frete: ${parseFloat(taxaRastreamento + taxaPecas + taxaQuilometro).toFixed(2)}`;
})