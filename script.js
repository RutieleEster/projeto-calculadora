function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const display = document.getElementById('displayResultado');

    // se não digitar os números vai avisar
    if (isNaN(n1) || isNaN(n2)) {
        display.innerHTML = "Digite os números!";
        display.style.color = "red";
        return;
    }

    display.style.color = "black";
    let resultado;

   
    if (operacao == 1) {
        resultado = n1 + n2; // Soma
    } else if (operacao == 2) {
        resultado = n1 - n2; // Subtração
    } else if (operacao == 3) {
        // Trava para divisão por zero
        resultado = n2 !== 0 ? (n1 / n2) : "Erro: Div. 0";
    } else if (operacao == 4) {
        resultado = n1 * n2; // Multiplicação
    }

    //resultado
    display.innerHTML = typeof resultado === 'number' ? resultado.toFixed(2) : resultado;
}

function limpar() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('displayResultado').innerHTML = "Aguardando...";
    document.getElementById('displayResultado').style.color = "black";
}