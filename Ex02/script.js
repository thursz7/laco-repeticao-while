let soma = 0;
let i = 0;
let nota = 0;

while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota de (0 a 10) ou digite um número negativo para sair:"));
    
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        i++;
    } else if (nota > 10) {
       alert("Nota inválida, digite apenas números até 10");
    }
}

if (i > 0) {
    let media = soma / i;
    alert(`Média = ${media.toFixed(2)} (${i} notas foram inseridas)`);
} else {
    alert("Nenhuma nota válida inserida")
} 
