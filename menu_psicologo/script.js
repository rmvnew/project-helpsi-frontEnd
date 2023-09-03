/* Estilos para o menu de navegação */
document.addEventListener("DOMContentLoaded", function () {
    // Captura os elementos do menu
    const alternarMenu = document.getElementById("alternar-menu");
    const fecharMenu = document.getElementById("fechar-menu");
    const menu = document.querySelector(".menu");

    // Abre o menu ao clicar no botão
    alternarMenu.addEventListener("click", function () {
        menu.classList.add("aberto");
    });

    // Fecha o menu ao clicar em "Fechar"
    fecharMenu.addEventListener("click", function () {
        menu.classList.remove("aberto");
    });
});
