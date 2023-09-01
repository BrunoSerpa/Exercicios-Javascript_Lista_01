document.getElementById("massaCorporal").addEventListener("click", function(event){
    event.preventDefault()
    let nome = document.getElementById("nome").value
    /* 4) Após as estradas de dados, atente-se a conversão das informações para dados do tipo float. */
    let peso = parseFloat(document.getElementById("peso").value)
    /* 5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100). */
    let altura = parseInt(document.getElementById("altura").value) / 100
    /* Verificação de Valores */
    try{
        if (isNaN(peso) || isNaN(altura) || nome == "") return window.alert("Insira valores válidos!")
    }
    catch{
        return window.alert("Insira valores válidos!")
    }
    /* 6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão: M = peso (quilos) ÷ altura² */
    let M = peso / altura ** 2
    let classificacao
    /* 7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas:*/
    switch (true) {
        case M < 16: classificacao = "Baixo peso muito grave"; break
        case M < 16.99: classificacao = "Baixo peso grave"; break
        case M < 18.49: classificacao = "Baixo peso"; break
        case M < 24.99: classificacao = "Peso normal"; break
        case M < 29.99: classificacao = "Sobrepeso"; break
        case M < 34.99: classificacao = "Obesidade grau I"; break
        case M < 39.99: classificacao = "Obesidade grau II"; break
        default: classificacao = "Obesidade grau III";
    }
    /* 8) Ao término o sistema deve fornecer a seguinte saída para o usuário: “<Nome> possui  índice  de  massa  corporal  igual  a <m> , sendo classificado como: <classificacao>.” */
    document.getElementById("resultadoMassaCorporal").innerText = `${nome.charAt(0).toUpperCase() + nome.slice(1)} possui  índice  de  massa  corporal  igual  a ${M.toFixed(2)}, sendo classificado como: ${classificacao}.`; 
})