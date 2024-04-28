function showHot() {
    // Mostrar los divs blancos y ocultar los divs azules
    document.querySelectorAll('.hot-item').forEach(item => {
        item.style.display = 'block';
    });
    document.querySelectorAll('.cold-item').forEach(item => {
        item.style.display = 'none';
    });
    // Ocultar los divs de panqueques y waffles
    document.querySelectorAll('.pancake-item, .waffle-item').forEach(item => {
        item.style.display = 'none';
    });
}

function showCold() {
    // Mostrar los divs azules y ocultar los divs blancos
    document.querySelectorAll('.cold-item').forEach(item => {
        item.style.display = 'block';
    });
    document.querySelectorAll('.hot-item').forEach(item => {
        item.style.display = 'none';
    });
    // Ocultar los divs de panqueques y waffles
    document.querySelectorAll('.pancake-item, .waffle-item').forEach(item => {
        item.style.display = 'none';
    });
}

function showPancakes() {
    // Mostrar los divs de panqueques y ocultar los demás
    document.querySelectorAll('.pancake-item').forEach(item => {
        item.style.display = 'block';
    });
    document.querySelectorAll('.hot-item, .cold-item, .waffle-item').forEach(item => {
        item.style.display = 'none';
    });
}

function showWaffles() {
    // Mostrar los divs de waffles y ocultar los demás
    document.querySelectorAll('.waffle-item').forEach(item => {
        item.style.display = 'block';
    });
    document.querySelectorAll('.hot-item, .cold-item, .pancake-item').forEach(item => {
        item.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Ocultar todas las secciones de recetas excepto las de "Hot Coffee"
    showHot();
});
