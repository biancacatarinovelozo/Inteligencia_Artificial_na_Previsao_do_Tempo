// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleção dos elementos do Menu Hambúrguer
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Função para alternar a abertura/fechamento do menu
    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    // Evento de clique no botão hambúrguer
    hamburger.addEventListener("click", toggleMenu);

    // Fecha o menu automaticamente quando o usuário clicar em qualquer link (âncora)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});