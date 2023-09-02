/* Desenvolva uma aplicação em JS que receba as 3 notas, calcule e imprima a média ponderada. */
document.getElementById("notaFinal").addEventListener("click", function(event){
    event.preventDefault()
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    /* Verificação de Valores */
    try {
        [nota1, nota2, nota3] = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)]
        if ([nota1, nota2, nota3].some(nota => nota < 0 || nota > 10)) return window.alert("Insira valores válidos (De 0 a 10)!");
    }
    catch{
        return window.alert("Insira valores válidos!");
    }
    let [peso1, peso2, peso3] = [2, 5, 3]
    /* A média ponderada é calculada pela fórmula: ((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / (soma dos pesos) */
    let media = (peso1 * nota1 + peso2  * nota2 + peso3 * nota3) / (peso1 + peso2 + peso3)
    /* Após concluir a média, o algoritmo deverá classificá-la*/
    let classificacao
    switch(true){
        case media>9: classificacao="A"; break
        case media>8: classificacao="B"; break
        case media>7: classificacao="C"; break
        case media>6: classificacao="D"; break
        case media>5: classificacao="E"; break
        default: classificacao="F"
    }
    document.getElementById("resultadoNotaFinal").innerText = `A média do aluno é ${media}, logo, a sua classificação é "${classificacao}"`
})