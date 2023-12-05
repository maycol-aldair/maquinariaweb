

$(document).ready(function () {
    $('.agregar').click(function () {
        var producto = $(this).closest('.producto');
        var nombre = producto.data('nombre');
        var precio = producto.data('precio');

        agregarAlCarrito(nombre, precio);
    });

    $('#vaciar-carrito').click(function () {
        $('#carrito-body').empty();
        actualizarTotal();
    });
});

function agregarAlCarrito(nombre, precio) {
    var fila = '<tr><td>' + nombre + '</td><td>$' + precio + '</td><td><button class="eliminar">Eliminar</button></td></tr>';
    $('#carrito-body').append(fila);

    $('.eliminar').off('click').on('click', function () {
        $(this).closest('tr').remove();
        actualizarTotal();
    });

    actualizarTotal();
}

function actualizarTotal() {
    var total = 0;
    $('#carrito-body tr').each(function () {
        var precio = parseFloat($(this).find('td:eq(1)').text().replace('$', ''));
        total += precio;
    });

    $('#total').text('Total: $' + total.toFixed(2));
}

