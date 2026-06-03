const jogadores = [
  {
    id: 1,
    nome: "Matheus Pereira",
    posicao: "Meia",
    numero: 10,
    descricao: "Meio-campista habilidoso, conhecido por sua visão de jogo e passes precisos.",
    imagem: "img/matheuspereira.jpg"
  },
  {
    id: 2,

    nome: "Gerson",
    posicao: "Volante",
    numero: 8,
    descricao: "Volante de força, marcação e saída de bola.",
    imagem: "img/gerson.jpg"
  },
  {
    id: 3,

    nome: "Kaio Jorge",
    posicao: "Atacante",
    numero: 9,
    descricao: "Atacante jovem e promissor, com boa finalização e movimentação.",
    imagem: "img/kj.jpg"
  },
  {
    id: 4,
    nome: "Fagner",
    posicao: "Lateral",
    numero: 23,
    descricao: "Lateral experiente, competitivo e intenso.",
    imagem: "img/fagner.jpg"
  },
  {
      id: 5,
    nome: "Cássio",
    posicao: "Goleiro",
    numero: 1,
    descricao: "Goleiro experiente, conhecido por suas defesas decisivas e liderança em campo.",
    imagem: "img/cassio.jpg"
  },
  {
    id: 6,
    nome: "Fabricio Bruno",
    posicao: "Zagueiro",
    numero: 15,
    descricao: "Zagueiro sólido, com boa leitura de jogo e habilidade no jogo aéreo.",
    imagem: "img/fabbruno.jpg"
  },
  {
    id: 7,
    nome: "Lucas Silva",
    posicao: "Volante",
    numero: 16,
    descricao: "Meio-campista talentoso, conhecido por sua visão de jogo e passes precisos.",
    imagem: "img/lucas.jpg"
  },
  {
    id: 8,
    nome: "Lucas Romero",
    posicao: "Volante",
    numero: 29,
    descricao: "Volante de força, marcação e saída de bola.",
    imagem: "img/romero.jpg"
  },
  {
    id: 9,
    nome: "Villalba",
    posicao: "Zagueiro",
    numero: 25,
    descricao: "Zagueiro experiente, com boa leitura de jogo e habilidade com os pés.",
    imagem: "img/villalba.jpg"
  }
];








const parametros = new URLSearchParams(window.location.search);

const idJogador = Number(parametros.get("id"));

const jogadorSelecionado = jogadores.find(function(player){

return player.id === idJogador;



});

console.log(jogadorSelecionado);

const detalhesJogador = document.getElementById("detalhes-jogador");

detalhesJogador.textContent = jogadorSelecionado.nome + " - " + jogadorSelecionado.posicao + " - " + jogadorSelecionado.numero;