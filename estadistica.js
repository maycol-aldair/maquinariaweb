document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (puedes obtener estos datos desde una API o una base de datos)
    var datos = {
        labels: ['Excavadora', 'Bulldozer', 'Grúa', 'Cargadora', 'Camión Volquete'],
        datasets: [{
            label: 'Cantidad de Compras',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [30, 45, 20, 35, 50]
        }]
    };

    // Configuración del gráfico
    var opciones = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Crear el gráfico
    var ctx = document.getElementById('grafico').getContext('2d');
    var grafico = new Chart(ctx, {
        type: 'bar',
        data: datos,
        options: opciones
    });
});

function mostrarMensaje() {
    alert('¡Haz clic en el botón flotante!');
}
