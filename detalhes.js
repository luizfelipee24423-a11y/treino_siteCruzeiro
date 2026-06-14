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







const parametros = new URLSearchParams(window.location.search);

const idJogador = Number(parametros.get("id"));

const jogadorSelecionado = jogadores.find(function(player){

return player.id === idJogador;



});



console.log(jogadorSelecionado);

const detalhesJogador = document.getElementById("detalhes-jogador");

if (!jogadorSelecionado) {


  detalhesJogador.textContent = "Jogador não encontrado.";
  throw new Error("Jogador não encontrado.");
}

let comentarios = JSON.parse(localStorage.getItem("comentarios"))|| [];





function renderizarDetalhesJogador(jogador) {


const botaoFavorito = document.createElement("button");
botaoFavorito.classList.add("btn", "btn-warning" , "botao-favorito");
botaoFavorito.textContent = "Adicionar aos Favoritos";


let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

if (favoritos.includes(jogador.id)) {
  botaoFavorito.textContent = "Remover dos Favoritos";
} else {
  botaoFavorito.textContent = "Adicionar aos Favoritos";
}




botaoFavorito.addEventListener("click" , function() {

if(favoritos.includes(jogador.id)){

  const novosFavoritos = favoritos.filter(function(id){

  return id !== jogador.id;

  });

  favoritos = novosFavoritos;

alert(jogador.nome + " removido dos favoritos!" );
localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
console.log(novosFavoritos);
botaoFavorito.textContent = "Adicionar aos Favoritos";
}

else{
alert(jogador.nome + " adicionado aos favoritos!" );
favoritos.push(jogador.id);
localStorage.setItem("favoritos", JSON.stringify(favoritos));
botaoFavorito.textContent = "Remover dos Favoritos";

console.log(favoritos);

}

});


const voltar = document.createElement("button");
voltar.classList.add("btn", "btn-primary", "botao-voltar");
voltar.textContent = "Voltar";

voltar.addEventListener("click", function() {

window.history.back();

});


detalhesJogador.appendChild(voltar);


const card = document.createElement("div");
card.classList.add("card-detalhes");


const titulo = document.createElement("h2");
titulo.classList.add("titulo-jogador");
titulo.textContent = jogador.nome;

const imagem = document.createElement("img");
imagem.classList.add("imagem-jogador");
imagem.src = jogador.imagem;

const descricao = document.createElement("p");
descricao.textContent = jogador.descricao;
descricao.classList.add("descricao-jogador");

const camisa = document.createElement("p");
camisa.textContent = "Número da camisa: " + jogador.numero;
camisa.classList.add("camisa-jogador");

const posicao = document.createElement("p");
posicao.textContent = "Posição: " + jogador.posicao;
posicao.classList.add("posicao-jogador");



card.appendChild(titulo);
card.appendChild(camisa);
card.appendChild(posicao);
card.appendChild(imagem);
card.appendChild(descricao);
card.appendChild(botaoFavorito);



detalhesJogador.appendChild(card);

const areaComentarios = document.createElement("section");
areaComentarios.classList.add("area-comentarios");

const tituloComentarios = document.createElement("h3");
tituloComentarios.textContent = "Comentários";

const campoComentario = document.createElement("textarea");
campoComentario.classList.add("campo-comentario");
campoComentario.placeholder = "Escreva o que acha sobre " + jogador.nome + "...";

const botaoComentar = document.createElement("button");
botaoComentar.classList.add("btn", "btn-success", "botao-comentar");
botaoComentar.textContent = "Comentar";

botaoComentar.addEventListener("click", function() {

const texto = campoComentario.value.trim();


if(texto === ""){
alert("O campo de comentário não pode estar vazio!");
return;
}

console.log(texto);

const novoComentario = {

id: Date.now(),
jogadorId: jogador.id,
texto: texto,
curtidas: 0
}

console.log(novoComentario);

comentarios.push(novoComentario);

localStorage.setItem("comentarios",JSON.stringify(comentarios));

console.log(comentarios);

renderizarComentarios();

campoComentario.value = "";


});

const listaComentarios = document.createElement("div");
listaComentarios.classList.add("lista-comentarios");

areaComentarios.appendChild(tituloComentarios);
areaComentarios.appendChild(campoComentario);
areaComentarios.appendChild(botaoComentar);
areaComentarios.appendChild(listaComentarios);

card.appendChild(areaComentarios);

renderizarComentarios();

function renderizarComentarios(){
listaComentarios.innerHTML = "";

const comentariosDoJogador = comentarios.filter(function(comentario){

return comentario.jogadorId === jogador.id;

});

if(comentariosDoJogador.length===0)
{

  const mensagem = document.createElement("p");
  mensagem.classList.add("nenhum-comentario");
  mensagem.textContent = "nenhum comentario"
  listaComentarios.appendChild(mensagem);
  return;
}




comentariosDoJogador.forEach(function(comentario){

const comentarioElemento = document.createElement("div");
comentarioElemento.classList.add("comentario");

const textoComentario = document.createElement("p");
textoComentario.classList.add("texto-comentario");
textoComentario.textContent = comentario.texto;

comentarioElemento.appendChild(textoComentario);

const botaoCurtir = document.createElement("button");
botaoCurtir.textContent = "Curtir";
botaoCurtir.classList.add("botao-curtir");


const infoCurtidas = document.createElement("p");
infoCurtidas.classList.add("info-curtidas");
infoCurtidas.textContent = "❤ " + comentario.curtidas + " curtidas";

const areaCurtidas = document.createElement("div");
areaCurtidas.classList.add("area-curtidas");

areaCurtidas.appendChild(infoCurtidas);
areaCurtidas.appendChild(botaoCurtir);
comentarioElemento.appendChild(areaCurtidas);

const conteudoComentario = document.createElement("div");
conteudoComentario.classList.add("conteudo-comentario");

conteudoComentario.appendChild(textoComentario);
conteudoComentario.appendChild(areaCurtidas);

comentarioElemento.appendChild(conteudoComentario);

botaoCurtir.addEventListener("click",function(){

comentario.curtidas++;

localStorage.setItem("comentarios", JSON.stringify(comentarios));

renderizarComentarios();
});

const botaoExcluir = document.createElement("button");
botaoExcluir.classList.add("botao-excluir");
botaoExcluir.textContent = "Excluir";

const botaoEditar = document.createElement("button");
botaoEditar.textContent = "Editar";
botaoEditar.classList.add("botao-editar");

botaoEditar.addEventListener("click", function(){

  const novoTexto = prompt("edite seu comentário: " , comentario.texto)
  console.log(novoTexto);

  if(novoTexto===null){

    return;
  }

  if(novoTexto.trim()===""){

    alert("o comentário nao pode ficar vazio. ");
    return;

  }

  comentario.texto = novoTexto.trim();
  localStorage.setItem("comentarios" , JSON.stringify(comentarios));

  renderizarComentarios();

});


const acoes = document.createElement("div");
acoes.classList.add("acoes");


acoes.appendChild(botaoEditar);
acoes.appendChild(botaoExcluir);

comentarioElemento.appendChild(acoes);

listaComentarios.appendChild(comentarioElemento);

botaoExcluir.addEventListener("click", function(){

const confirmar = confirm("Quer excluir mesmo? ");

if(!confirmar){


return;

}


comentarios = comentarios.filter(function(item){

return item.id !== comentario.id;

});

localStorage.setItem("comentarios", JSON.stringify(comentarios));

renderizarComentarios();

})

});


}

}




renderizarDetalhesJogador(jogadorSelecionado);



