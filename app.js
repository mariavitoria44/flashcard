criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)
function criaCartao (categoria, pergunta, resposta) {

}
function criaCartao (categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
}
function criaCartao(categoria, pergunta, resposta) {
    let container 
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
}
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>Programação</h3>
<div class="cartao__conteudo__pergunta">
        <p>O que é JavaScript?</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>O JavaScript é uma linguagem de programação</p>
</div>
</div>
`
container.appendChild(cartao)
<!-- <article class="cartao">
<div class="cartao__conteudo">
        <h3>Programação</h3>
        <div class="cartao__conteudo__pergunta">
                <p>O que é JavaScript?</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>O JavaScript é uma linguagem de programação</p>
        </div>
</div>
</article> -->
cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
        </div>
        </div>
`
criaCartao(
    'Lingua inglesa',
    'Como se diz OI em inglês?',
    'Oi em ingles é HI (RAI)'
) 
let respostaEstaVisivel = false
function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}
.cartao.active .cartao__conteudo {
    transform: rotateY(180deg);
}
function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)
