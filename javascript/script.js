// Inicializando as animações com GSAP
gsap.from(".animated-section", { opacity: 0, duration: 1, y: 50, stagger: 0.3 });

// Inicializando o AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-back',
    once: true
});
// Script para possíveis animações ou interatividade adicional
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada e script ativo!");
});
