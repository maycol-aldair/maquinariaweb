document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        const effect = image.dataset.effect;
        image.classList.add(`effect-${effect}`);
    });
});

document.getElementById('downloadButton').addEventListener('click', function () {
    // Cambia la URL al nombre de tu archivo PDF
    const pdfURL = 'documento.pdf';

    // Crea un elemento <a> temporal
    const link = document.createElement('a');
    link.href = pdfURL;

    // Especifica el atributo de descarga y el nombre del archivo
    link.download = 'documento.pdf';

    // Simula un clic en el elemento <a> para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
