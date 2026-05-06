let saldo = 1000; // Saldo inicial simulado

alert(`Bem-vindo ao Banco JS! Seu saldo atual é: R$ ${saldo}`);

// O laço continua enquanto o saldo for maior que zero
while (saldo > 0) {
    let saque = parseFloat(prompt(`Saldo disponível: R$ ${saldo}\nQuanto deseja sacar?`));

    // 1. Verifica se o valor do saque é maior que o saldo disponível
    if (saque > saldo) {
        alert("Saldo insuficiente! Tente um valor menor.");
    } 
    // 2. Verifica se o usuário digitou um valor inválido (zero ou negativo)
    else if (saque <= 0) {
        alert("Por favor, digite um valor de saque válido (maior que 0).");
    } 
    // 3. Caso o saque seja possível
    else {
        saldo -= saque; // Subtrai o saque do saldo (atalho para saldo = saldo - saque)
        alert(`Saque de R$ ${saque} realizado com sucesso!`);
        alert(`Saldo restante: R$ ${saldo}`);
    }
}

alert("Seu saldo chegou a zero. O programa será encerrado.");