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
  },
{
  id: 10,
    nome: "William",
    posicao: "Lateral",
    numero: 12,
    descricao: "Lateral experiente, com bom cruzamento e apoio ao ataque.",
    imagem: "img/william.jpg"

},

{
 id: 11,
    nome: "Johnatan Jesus",
    posicao: "Zagueiro",
    numero: 34,
    descricao: "Zagueiro Jovem, com boa leitura de jogo e habilidade com os pés.",
    imagem: "img/jj.jpg"


},

{
 id: 12,
    nome: "Arroyo",
    posicao: "Atacante",
    numero: 99,
    descricao: "Atacante jovem e promissor, com boa finalização e movimentação.",
    imagem: "img/arroyo.jpg"


},

{

 id: 13,
    nome: "Sinisterra",
    posicao: "Atacante",
    numero: 17,
    descricao: "Atacante jovem e promissor, rápido e habilidoso.",
    imagem: "img/sinisterra.jpg"

},
{
 id: 14,
    nome: "Christian",
    posicao: "Volante",
    numero: 88,
    descricao: "Jogador coringa, atua em várias posições, com boa visão de jogo e passes precisos.",
    imagem: "img/christian.jpg"
},

{

 id: 15,
    nome: "Kaiki",
    posicao: "Lateral",
    numero: 6,
    descricao: "Lateral Jovem, com bom apoio ao ataque e marcação sólida.",
    imagem: "img/kaiki.jpg"

},

{
id: 16,
    nome: "Otávio",
    posicao: "Goleiro",
    numero: 81,
    descricao: "Goleiro Jovem, cria da toca e potencial para se tornar um grande goleiro no futuro.",
    imagem: "img/otavio.jpg"


}
];

const slides = [

{
titulo: "Mineirão",
descricao: "A casa do cruzeiro.",
imagem: "img/mineirao.jpg"

},

{
titulo: "Títulos",
descricao: "O porque somos o maior de minas.",
imagem: "img/titulos.jpg"

},

{
titulo: "Próximo jogo na libertadores",
descricao: "Cruzeiro x Flamengo",
imagem: "img/proximojogo.jpg"
}

]

const carrosselHome = document.getElementById("carrossel-home");
let slideAtual =0;

function renderizarCarrossel()
{
carrosselHome.innerHTML = "";

const slide = slides[slideAtual];

const titulo = document.createElement("h2");
titulo.textContent = slide.titulo;

const descricao = document.createElement("p");
descricao.textContent = slide.descricao;

const imagem = document.createElement("img");
imagem.src = slide.imagem;
imagem.alt = slide.titulo;

const botaoAnterior = document.createElement("button");
botaoAnterior.textContent = "Anterior";

const botaoProximo = document.createElement("button");
botaoProximo.textContent = "Próximo";

botaoProximo.addEventListener("click", function(){

slideAtual++;

if(slideAtual>=slides.length){

  slideAtual=0;
}
renderizarCarrossel();

}
);

botaoAnterior.addEventListener("click", function(){

slideAtual--;

if(slideAtual<0)
{

slideAtual= slides.length-1;

}

renderizarCarrossel();
});

imagem.classList.add("imagem-carrossel");

botaoAnterior.classList.add("botao-carrossel", "botao-anterior");
botaoProximo.classList.add("botao-carrossel", "botao-proximo");

carrosselHome.appendChild(botaoAnterior);
carrosselHome.appendChild(botaoProximo);
carrosselHome.appendChild(titulo);
carrosselHome.appendChild(imagem);
carrosselHome.appendChild(descricao);



}



carrosselHome.classList.add("carrossel-home");

renderizarCarrossel();

setInterval(function(){

slideAtual++;

if(slideAtual>=slides.length){

slideAtual=0;
}
renderizarCarrossel();

},5000);

const tabelaJogadores = document.getElementById("tabela-jogadores");  

carrosselHome.classList.add("carrossel-home");



jogadores.forEach(function(player) {

const linha= document.createElement("tr");

const nome = document.createElement("td");
const posicao = document.createElement("td");

nome.textContent = player.nome;
posicao.textContent = player.posicao;

linha.appendChild(nome);
linha.appendChild(posicao);
tabelaJogadores.appendChild(linha);

});

const pesquisa = document.getElementById("pesquisa");

const botaoFavorito = document.createElement("button");
botaoFavorito.classList.add("mostrar-favoritos");
botaoFavorito.textContent = "Mostrar Favoritos";

pesquisa.appendChild(botaoFavorito);

botaoFavorito.addEventListener("click", function() {

let favoritos = JSON.parse(localStorage.getItem("favoritos"));

const jogadoresFavoritos = jogadores.filter(function(player){


return favoritos.includes(player.id);

});

renderizarJogadores(jogadoresFavoritos);

});

const listaJogadores = document.getElementById("lista-jogadores");

function renderizarJogadores(lista) {

listaJogadores.innerHTML = "";

lista.forEach(function(player) {
  const coluna = document.createElement("article");
  coluna.classList.add("col-md-6", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card", "h-100", "jogador-card");

 let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];


  if(favoritos.includes(player.id)){
    card.classList.add("card-favorito");

    const seloFavorito= document.createElement("p");
    seloFavorito.classList.add("selo-favorito");
    seloFavorito.textContent = "Favorito";

    card.appendChild(seloFavorito);

  }

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

const textoPesquisa = campoPesquisa.value.trim().toLowerCase();

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

