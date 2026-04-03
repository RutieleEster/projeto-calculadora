const divResultado = document.getElementById('resultado');
const textoResultado = document.getElementById('textoResultado');

function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);

    // se não digitar nada, avisa o usuário
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, preencha os dois números!");
        return;
    }

    let resultadoFinal;

    // Lógica das 4 operações
    if (operacao === 1) {
        resultadoFinal = n1 + n2; // Soma
    } 
    else if (operacao === 2) {
        resultadoFinal = n1 - n2; // Subtração
    } 
    else if (operacao === 3) {
        // Verificação para não dividir por zero
        if (n2 === 0) {
            resultadoFinal = "Erro: Divisão por 0";
        } else {
            resultadoFinal = n1 / n2;
        }
    } 
    else if (operacao === 4) {
        resultadoFinal = n1 * n2; // Multiplicação
    }

    //resultado
    if (typeof resultadoFinal === 'number') {
        textoResultado.textContent = "Resultado: " + resultadoFinal.toFixed(2);
    } else {
        textoResultado.textContent = resultadoFinal;
    }

    // Mostra a div de resultado
    divResultado.classList.remove('hidden');
}

function limpar() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    divResultado.classList.add('hidden');
    textoResultado.textContent = "Aguardando...";
}
