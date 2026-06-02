const jogadores = [
  {
    nome: "Matheus Pereira",
    posicao: "Meia",
    numero: 10,
    descricao: "Meio-campista habilidoso, conhecido por sua visão de jogo e passes precisos.",
    imagem: "img/matheuspereira.jpg"
  },
  {
    nome: "Gerson",
    posicao: "Volante",
    numero: 8,
    descricao: "Volante de força, marcação e saída de bola.",
    imagem: "img/gerson.jpg"
  },
  {
    nome: "Kaio Jorge",
    posicao: "Atacante",
    numero: 9,
    descricao: "Atacante jovem e promissor, com boa finalização e movimentação.",
    imagem: "img/kj.jpg"
  },
  {
    nome: "Fagner",
    posicao: "Lateral",
    numero: 23,
    descricao: "Lateral experiente, competitivo e intenso.",
    imagem: "img/fagner.jpg"
  },
  {
    nome: "Cássio",
    posicao: "Goleiro",
    numero: 1,
    descricao: "Goleiro experiente, conhecido por suas defesas decisivas e liderança em campo.",
    imagem: "img/cassio.jpg"
  },
  {
    nome: "Fabricio Bruno",
    posicao: "Zagueiro",
    numero: 15,
    descricao: "Zagueiro sólido, com boa leitura de jogo e habilidade no jogo aéreo.",
    imagem: "img/fabbruno.jpg"
  },
  {
    nome: "Lucas Silva",
    posicao: "Volante",
    numero: 16,
    descricao: "Meio-campista talentoso, conhecido por sua visão de jogo e passes precisos.",
    imagem: "img/lucas.jpg"
  },
  {
    nome: "Lucas Romero",
    posicao: "Volante",
    numero: 29,
    descricao: "Volante de força, marcação e saída de bola.",
    imagem: "img/romero.jpg"
  },
  {
    nome: "Villalba",
    posicao: "Zagueiro",
    numero: 25,
    descricao: "Zagueiro experiente, com boa leitura de jogo e habilidade com os pés.",
    imagem: "img/villalba.jpg"
  }
];

const listaJogadores = document.getElementById("lista-jogadores");

function renderizarJogadores(lista) {

listaJogadores.innerHTML = "";

lista.forEach(function(player) {
  const coluna = document.createElement("article");
  coluna.classList.add("col-md-6", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card", "h-100", "jogador-card");

  const imagem = document.createElement("img");
  imagem.classList.add("card-img-top");
  imagem.src = player.imagem;
  imagem.alt = player.nome;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const titulo = document.createElement("h5");
  titulo.classList.add("card-title");
  titulo.textContent = player.nome + " - Camisa " + player.numero;

  const posicao = document.createElement("p");
  posicao.classList.add("card-text");
  posicao.textContent = "Posição: " + player.posicao;

  const descricao = document.createElement("p");
  descricao.classList.add("card-text");
  descricao.textContent = player.descricao;

  cardBody.appendChild(titulo);
  cardBody.appendChild(posicao);
  cardBody.appendChild(descricao);

  card.appendChild(imagem);
  card.appendChild(cardBody);

  coluna.appendChild(card);

  listaJogadores.appendChild(coluna);
  
});
}

renderizarJogadores(jogadores);

const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener("input", function() {

const textoPesquisa = campoPesquisa.value.toLowerCase();

const resultadoPesquisa = jogadores.filter(function(player){


return player.nome.toLowerCase().includes(textoPesquisa);

});


renderizarJogadores(resultadoPesquisa);

});






