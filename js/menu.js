// menu.js
function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.querySelector(".menu-overlay");
    const body = document.body;
    
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    
    if (menu.classList.contains("active")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});