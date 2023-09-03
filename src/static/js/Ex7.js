document.getElementById("dataEscrita").addEventListener("click", function(event) {
    event.preventDefault();
    
    const data = document.getElementById("data").value;
    let dataEscrita;
    if (data.includes(" ")) dataEscrita = data.split(" ");
    else if (data.includes("/")) dataEscrita = data.split("/");
    else if (data.includes("-")) dataEscrita = data.split("-");
    
    function validandoData(dia, mes, ano){
        const anoBissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
        const diaValido = [0, 31, anoBissexto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Verifica se o mês e o dia estão dentro dos limites
        return mes >= 1 && mes <= 12 && dia >= 1 && dia <= diaValido[mes];
    }
    
    /* Verificação de Valores */
    try {
        if (data == "") return window.alert("Insira valores!");
        else if (dataEscrita.some(numero => isNaN(parseInt(numero)))) return window.alert("Insira valores válidos!");
        if (dataEscrita.length != 3) return window.alert("Insira a data em uma das estruturas legíveis:\ndd-mm-aaaa\ndd mm aaaa\ndd/mm/aaaa");
        else if (!validandoData(parseInt(dataEscrita[0]), parseInt(dataEscrita[1]), parseInt(dataEscrita[2]))) return window.alert("Insira uma data válida!");
    }
    catch{
        return window.alert("Insira valores válidos!")
    }

    let mes;
    switch (parseInt(dataEscrita[1])) {
        case 1: mes = "Janeiro"; break;
        case 2: mes = "Fevereiro"; break;
        case 3: mes = "Março";  break;
        case 4: mes = "Abril"; break;
        case 5: mes = "Maio"; break;
        case 6: mes = "Junho"; break;
        case 7: mes = "Julho"; break;
        case 8: mes = "Agosto"; break;
        case 9: mes = "Setembro"; break;
        case 10: mes = "Outubro"; break;
        case 11: mes = "Novembro"; break;
        case 12: mes = "Dezembro"; break;
    }
    document.getElementById("resultadoDataEscrita").innerText = `A data escrita é: ${dataEscrita[0]} de ${mes} de ${dataEscrita[2]}`;
});
