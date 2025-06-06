// scripts.js
// Descargar PDF del CV desde GitHub Pages
document.getElementById('download-pdf').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'https://daroMR.github.io/cv/PDF/CV_Hesvin_Dario_Molina_Rios_2025.pdf'; // Enlace absoluto a GitHub Pages
    link.download = 'CV_Hesvin_Dario_Molina_Rios_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('linkedin-btn').addEventListener('click', function () {
    window.open('https://linkedin.com/in/drqbeat', '_blank');
});