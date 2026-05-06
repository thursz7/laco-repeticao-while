let soma = 0;
let valor = -1;
let i = 0;
let total = 0;

while (valor !== 0) {
    valor = parseFloat(prompt("Digite o valor da sua compra ou digite 0 para receber o total: "));

    if (valor > 0){
        total += valor;
        alert(`Item adicionado: R$ ${valor.toFixed(2)}`);
    } else if (valor < 0) {
        alert("Valores negativos não são permitidos");
    }
}

alert(`Compra finalizada valor total = R$ ${total.toFixed(2)}`);