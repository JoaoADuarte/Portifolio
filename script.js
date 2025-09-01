
const fecharBotao = document.querySelectorAll('.fechar-modal-btn');
const cardsDoPortfolio = document.querySelectorAll('[data-modal-target]');

cardsDoPortfolio.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    });
});
// Fecha o Modal no X
fecharBotao.forEach(botao => {
    botao.addEventListener('click', () => {
        botao.closest("div[id$='modal']").classList.add('hidden'); // Busca a div pai mais próxima com id terminando em modal
    });
});

// Fechar modal ao clicar no bg
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('bg-black/60')) {
        e.target.classList.add('hidden');
    }
});

