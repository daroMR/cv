// scripts.js
// Descargar PDF del CV desde la carpeta local PDF
document.getElementById('download-pdf').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'PDF/CV_Hesvin_Dario_Molina_Rios_2025.pdf'; // Ruta relativa al archivo
    link.download = 'CV_Hesvin_Dario_Molina_Rios_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Botón para ir a LinkedIn
document.getElementById('linkedin-btn').addEventListener('click', function () {
    window.open('https://linkedin.com/in/drqbeat', '_blank');
});