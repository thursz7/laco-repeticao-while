let i = parseFloat(prompt("Digite um número positivo: "));

while (i < 0) {
    i = parseFloat(prompt("Valor inválido! Por favor, digite um número POSITIVO:"));
}

alert(`Obrigado por inserir um número positivo: ${i}`);