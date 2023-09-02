document.getElementById("calculadora").addEventListener("click", function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const operacao = (document.getElementById("operacao").value).toLowerCase()
    /* Verificação de Valores */
    try{
        if ([num1, num2].some(numero => isNaN(numero))) return window.alert("Insira valores!")
        if (!["soma", "subtração"].includes(operacao)) return window.alert('Insira uma operação válida!\n (Insira: "soma" ou "subtração")')
    }
    catch{
        return window.alert("Insira valores válidos!")
    }
    /* 3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido cálculo. */
    function calculo(num1, num2, operacao){
        /* 4) A função deve executar o cálculo com base na operação informada pelo usuário e na sequência deve retornar o valor encontrado. */
        if (operacao=="soma") return num1+num2
        return num1-num2
    }
    /* 5) Ao término o sistema deve fornecer a seguinte saída para o usuário: “O resultado é: <resultado>.”*/
    document.getElementById("resultadoCalculadora").innerText = `O resultado é: ${calculo(num1,num2,operacao)}`;
})