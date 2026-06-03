// Seleção dos elementos do Menu Hambúrguer
const hamburger = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Função para abrir e fechar o menu ao clicar no botão
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Evento para fechar o menu automaticamente ao clicar em qualquer tópico/link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});