document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuBtn = document.getElementById('toggle-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleMenuBtn.addEventListener('click', function () {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
            content.style.marginLeft = '0';
        } else {
            sidebar.style.width = '250px';
            content.style.marginLeft = '250px';
        }
    });
});

function mostrarContenido(opcion) {
    const content = document.getElementById('content');
    content.innerHTML = `<h1>Contenido de la Opción ${opcion}</h1>`;
}
