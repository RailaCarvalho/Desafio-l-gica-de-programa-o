// Classe Heroi
class Heroi {
    // Método construtor que inicializa as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem de ataque
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'as mãos';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Função para obter dados do usuário e criar o herói
  function criarHeroi() {
    // Obtem os dados do usuário
    const nome = prompt("Digite o nome do herói:");
    const idade = parseInt(prompt("Digite a idade do herói:"));
    const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");
  
    // Cria um novo herói
    const heroi = new Heroi(nome, idade, tipo);
  
    // Exibe o ataque
    heroi.atacar();
  }
  
  // Chama a função para criar o herói
  criarHeroi();
  