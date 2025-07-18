const btnCoracao = document.getElementById('btn-coracao');
const mensagem = document.getElementById('mensagem');
const efeitoCoracoes = document.getElementById('efeito-coracoes');

btnCoracao.addEventListener('click', () => {
  // Mostrar mensagem
  mensagem.classList.add('mostrar');

  // Criar coração flutuante
  criarCoracao();
});

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '♥';

  // Posiciona em uma posição horizontal aleatória na tela
  coracao.style.left = Math.random() * window.innerWidth + 'px';

  // Define duração da animação aleatória entre 1.5 e 3 segundos
  coracao.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';

  // Adiciona no container dos corações
  efeitoCoracoes.appendChild(coracao);

  // Remove o coração depois que a animação terminar (3 segundos)
  coracao.addEventListener('animationend', () => {
    coracao.remove();
  });
}
