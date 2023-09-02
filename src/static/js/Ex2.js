document.getElementById("faixaEtaria").addEventListener("click", function(event){
    event.preventDefault()
    let idade = document.getElementById("idade").value
    /* Verificação de Valor */
    try {
        idade = parseInt(idade)
        if (isNaN(idade) || idade === null) return window.alert("Insira um valor válido!")
    }
    catch {
        return window.alert("Insira um valor válido!")
    }

    let faixaEtaria
    if (idade<=0) faixaEtaria="Não nascido"
    /* Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”. Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”. Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto” */
    else if (idade<15) faixaEtaria="Criança"
    else if (idade<30) faixaEtaria="Jovem"
    else if (idade<60) faixaEtaria="Adulto"
    else faixaEtaria="Idoso"
    document.getElementById("resultadoFaixaEtaria").innerText = `Quem tem ${idade} anos é classificado como "${faixaEtaria}".`; 
})