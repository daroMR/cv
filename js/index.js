document.getElementById('download-pdf').addEventListener('click', function () {
    try {
        const link = document.createElement('a');
        link.href = 'https://daroMR.github.io/cv/descargas/CV_Hesvin_Dario_Molina_Rios_2025.pdf';
        link.download = 'CV_Hesvin_Dario_Molina_Rios_2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('No se pudo descargar el PDF:', error);
        alert('Ocurrió un error al intentar descargar el CV. Intenta de nuevo.');
    }
});

document.getElementById('contact-btn').addEventListener('click', function () {
    try {
        window.open('https://t.me/drqbeat', '_blank');
    } catch (error) {
        console.error('No se pudo abrir Telegram:', error);
        alert('No se pudo abrir Telegram.');
    }
});

document.getElementById('linkedin-btn').addEventListener('click', function () {
    try {
        window.open('https://linkedin.com/in/drqbeat', '_blank');
    } catch (error) {
        console.error('No se pudo abrir LinkedIn:', error);
        alert('No se pudo abrir LinkedIn.');
    }
});
