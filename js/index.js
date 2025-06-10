// scripts.js
// Asegúrate de que este archivo se cargue después de que el DOM esté listo
// o usa defer en el <script> para evitar errores si los elementos aún no existen

// Descargar el CV en PDF desde GitHub Pages
document.getElementById('download-pdf').addEventListener('click', function () {
    try {
        // Crea un enlace temporal para forzar la descarga del archivo PDF
        const link = document.createElement('a');
        link.href = 'https://daroMR.github.io/cv/descargas/CV_Hesvin_Dario_Molina_Rios_2025.pdf'; // Ruta absoluta al PDF en GitHub Pages
        link.download = 'CV_Hesvin_Dario_Molina_Rios_2025.pdf'; // Nombre sugerido para la descarga
        document.body.appendChild(link); // Añade el enlace al DOM
        link.click(); // Simula el clic para iniciar la descarga
        document.body.removeChild(link); // Elimina el enlace temporal
    } catch (error) {
        // Si ocurre un error, muestra un mensaje en consola y alerta al usuario
        console.error('No se pudo descargar el PDF:', error);
        alert('Ocurrió un error al intentar descargar el CV. Intenta de nuevo.');
    }
});

// Abrir el chat de Telegram en una nueva pestaña
document.getElementById('contact-btn').addEventListener('click', function () {
    try {
        window.open('https://t.me/drqbeat', '_blank');
    } catch (error) {
        console.error('No se pudo abrir Telegram:', error);
        alert('No se pudo abrir Telegram.');
    }
});

// Abrir el perfil de LinkedIn en una nueva pestaña
document.getElementById('linkedin-btn').addEventListener('click', function () {
    try {
        window.open('https://linkedin.com/in/drqbeat', '_blank');
    } catch (error) {
        console.error('No se pudo abrir LinkedIn:', error);
        alert('No se pudo abrir LinkedIn.');
    }
});

// Recomendación: Si tienes más botones, sigue este patrón.
// Si los elementos pueden no existir, valida antes de agregar el listener:
// const btn = document.getElementById('download-pdf');
// if (btn) { btn.addEventListener(...); }