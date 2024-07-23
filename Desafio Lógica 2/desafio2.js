function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >= 101) {
        return "Imortal";
    }
}

function calcularSaldoRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = determinarNivel(vitorias);
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

function obterDadosDoUsuario() {
    let vitorias = parseInt(prompt("Digite o número de vitórias:"));
    let derrotas = parseInt(prompt("Digite o número de derrotas:"));
    if (isNaN(vitorias) || isNaN(derrotas)) {
        console.log("Por favor, insira números válidos.");
    } else {
        calcularSaldoRankeadas(vitorias, derrotas);
    }
}

// Executa a função para obter os dados do usuário
obterDadosDoUsuario();
