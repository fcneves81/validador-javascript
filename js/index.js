//Gera um número aleatório entre 0 e 5, que será usado para receber a classe "inverter"
var inverter = Math.floor(Math.random() * 6);

//Captura todas as imagens da mesma classe
var imagem = document.querySelectorAll('.img-c__img');

//Adiciona id que inverte a imagem
imagem[inverter].setAttribute('id', 'inverter');
imagem[inverter].addEventListener('click', criaBotao);

// Captura a div que vai receber o botao de prosseguir
var botao = document.querySelector('.prosseguir');


function criaBotao() {
   botao.innerHTML = "<a href='passou.html'><button type='submit' class='btn'>prosseguir</button></a>"
}

