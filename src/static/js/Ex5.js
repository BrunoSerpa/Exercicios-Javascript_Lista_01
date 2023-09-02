document.getElementById("hoteleira").addEventListener("click", function(event) {
    event.preventDefault();
    /* Faça um algoritmo que: - Leia as informações dos funcionários: código (inteiro), número de horas trabalhadas (inteiro) no mês, turno (caractere) e categoria (caractere). */
    let codigo = parseInt(document.getElementById("codigoFG").value) // const codigo = document.form.codigoFG.value;
    let horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value)
    let turno = document.getElementById("turno").value 
    let categoriaFG = document.querySelectorAll('input[type="radio"][name="categoria"]')
    let categoria
    categoriaFG.forEach(resposta => {
        if (resposta.checked) categoria = resposta.value
    })
    let salarioMinimo = parseInt(document.getElementById("salarioMinimo").value)
    /* Verificação de Valores */
    try{
        if ([codigo, horasTrabalhadas, salarioMinimo].some(numero => isNaN(numero))) return window.alert("Insira valores!")
        if (!["N", "M","V"].includes(turno) || !["G","F"].includes(categoria)) return window.alert("Insira valores válidos!")
    }
    catch{
        return window.alert("Insira valores válidos!")
    }
    /* Calcule o valor da hora trabalhada, conforme as regras apresentadas na tabela a seguir. O valor do salário mínimo deve ser solicitado pelo algoritmo, pois ele varia de estado para estado e a rede de hotéis está distribuída por todo o País. Utilizar o comando de seleção múltipla (ou um comando escolha e outro pode ser se encadeado – não utilizar se simples para esse item) para testar a categoria e o turno para calcular o valor da hora trabalhada. */
    let ValorHorasTrabalhadas
    if (categoria == "G" && turno== "N")          ValorHorasTrabalhadas = salarioMinimo * 0.05
    else if (categoria == "G" && (turno== "M" || "V"))   ValorHorasTrabalhadas = salarioMinimo * 0.04
    else if (categoria == "F" && turno== "N")     ValorHorasTrabalhadas = salarioMinimo * 0.02
    else if (categoria == "F" && (turno== "M" || "V"))   ValorHorasTrabalhadas = salarioMinimo * 0.01
    /* Calcule o salário inicial do funcionário com base no valor da hora trabalhada e no número de horas trabalhadas.
    */
   let salarioInicial
   salarioInicial = ValorHorasTrabalhadas * horasTrabalhadas
   /* Calcule o valor do auxílio-alimentação recebido pelo funcionário de acordo com seu salário inicial, conforme a tabela a seguir. Utilizar o comando de seleção composto encadeado. */
   let auxilioAlimentacao
   if (salarioInicial<=800) auxilioAlimentacao = salarioInicial * 0.25
   else if (salarioInicial<=1200) auxilioAlimentacao = salarioInicial * 0.20
   else auxilioAlimentacao = salarioInicial * 0.15
   /* Imprima como saída o código, número de horas trabalhadas, valor da hora trabalhada, salário inicial, auxílio alimentação e salário final (salário inicial + auxílio-alimentação). */
    document.getElementById("resultadoHoteleira").innerText = `Código: ${codigo};\n Valor de horas trabalhadas: R$${ValorHorasTrabalhadas.toFixed(2)};\n Salário Inicial: R$${salarioInicial.toFixed(2)};\n Auxílio Alimentação: R$${auxilioAlimentacao.toFixed(2)}\n Salário final: R$${(salarioInicial + auxilioAlimentacao).toFixed(2)}`;
})