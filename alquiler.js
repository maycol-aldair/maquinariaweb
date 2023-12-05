function guardarRegistro() {
    const tipoMaquina = document.getElementById('tipoMaquina').value;
    const dias = parseInt(document.getElementById('dias').value);
    const precio = parseFloat(document.getElementById('precio').value);

    // Validar la entrada
    if (tipoMaquina && !isNaN(dias) && !isNaN(precio)) {
        // Crear un objeto con la información del registro
        const registro = {
            tipoMaquina,
            dias,
            precio
        };

        // Agregar el registro a la tabla
        agregarRegistroATabla(registro);

        // Limpiar el formulario
        document.getElementById('registrationForm').reset();
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function agregarRegistroATabla(registro) {
    const tableBody = document.getElementById('fleteTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow(tableBody.rows.length);

    const cell1 = newRow.insertCell(0);
    cell1.textContent = registro.tipoMaquina;

    const cell2 = newRow.insertCell(1);
    cell2.textContent = registro.dias;

    const cell3 = newRow.insertCell(2);
    cell3.textContent = registro.precio.toFixed(2);
}