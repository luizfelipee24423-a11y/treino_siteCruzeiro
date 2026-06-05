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

  const botaoDetalhes = document.createElement("a");
botaoDetalhes.classList.add("btn", "btn-primary");
botaoDetalhes.textContent = "Ver Detalhes";
botaoDetalhes.href = "detalhes.html?id=" + player.id;

  cardBody.appendChild(titulo);
  cardBody.appendChild(posicao);
  cardBody.appendChild(descricao);
  cardBody.appendChild(botaoDetalhes);

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


return player.nome.toLowerCase().includes(textoPesquisa) || player.posicao.toLowerCase().includes(textoPesquisa) || player.numero.toString().includes(textoPesquisa);

});


renderizarJogadores(resultadoPesquisa);

});

const setores = document.querySelectorAll(".setor");

setores.forEach(function(setor) {


setor.addEventListener("click",function(){

const posicaoClicada = setor.dataset.posicao;

const jogadoresFiltrados = jogadores.filter(function(player){

return player.posicao === posicaoClicada;



});

renderizarJogadores(jogadoresFiltrados);

});



});

const parametros = new URLSearchParams(window.location.search)

const idJogador = Number(parametros.get("id"));

console.log(idJogador);

const jogadorSelecionado = jogadores.find(function(player){

  
  return player.id === idJogador;
  

});
