// scripts.js

// Inicializar AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Script para el efecto de escritura
const roleElement = document.getElementById("role");
const roles = ["Desarrollador Web", "Ingeniero de Software"];
let currentIndex = 0;
let currentRole = "";
let charIndex = 0;

function type() {
    if (charIndex < roles[currentIndex].length) {
        currentRole += roles[currentIndex].charAt(charIndex);
        roleElement.innerHTML = currentRole;
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        currentRole = currentRole.slice(0, -1);
        roleElement.innerHTML = currentRole;
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        currentIndex = (currentIndex + 1) % roles.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Script para el desplazamiento suave en enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
