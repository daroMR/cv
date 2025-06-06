// Descargar PDF (siempre en resolución grande y sin botones)
document.getElementById('download-pdf').addEventListener('click', function () {
    const cv = document.querySelector('.container');
    const actionBar = document.getElementById('action-bar');
    const originalWidth = cv.style.width;
    const originalMaxWidth = cv.style.maxWidth;

    // Oculta la barra de botones antes de capturar
    actionBar.style.display = 'none';
    cv.style.width = '900px';
    cv.style.maxWidth = '900px';

    const a4Width = 595.28; // pt
    const a4Height = 841.89; // pt
    const marginTop = 40;    // margen superior en pt
    const marginBottom = 40; // margen inferior en pt
    const usableHeight = a4Height - marginTop - marginBottom;
    const scale = a4Width / 900;

    html2canvas(cv, {
        scale: scale * 2,
        useCORS: true,
        backgroundColor: '#f8fafc',
        scrollY: -window.scrollY
    }).then(canvas => {
        // Restaura la barra de botones y estilos originales
        actionBar.style.display = '';
        cv.style.width = originalWidth;
        cv.style.maxWidth = originalMaxWidth;

        const imgData = canvas.toDataURL('image/png');
        const pdf = new window.jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'letter'
        });

        const imgWidth = a4Width;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = marginTop;

        const xOffset = (a4Width - imgWidth) / 2;

        pdf.addImage(imgData, 'PNG', xOffset, position, imgWidth, imgHeight);

        heightLeft -= usableHeight;

        while (heightLeft > 0) {
            position -= usableHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', xOffset, position, imgWidth, imgHeight);
            heightLeft -= usableHeight;
        }

        pdf.save('CV_Hesvin_Dario_Molina_Rios_2025.pdf');
    });
});

// Cambiar tema cíclicamente (solo claro y oscuro)
const themes = ['', 'dark'];
let themeIndex = 0;
const body = document.body;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setThemeIcon(isDark) {
    themeIcon.innerHTML = isDark
        // Sol para modo oscuro
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
                <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
           </svg>`
        // Luna para modo claro
        : `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
           </svg>`;
}

function applyTheme(index) {
    body.classList.remove('dark');
    if (themes[index]) body.classList.add(themes[index]);
    setThemeIcon(themes[index] === 'dark');
}

themeBtn.addEventListener('click', () => {
    themeIndex = (themeIndex + 1) % themes.length;
    applyTheme(themeIndex);
});

// Inicializa el icono correcto al cargar
applyTheme(themeIndex);

// Siempre tema claro al imprimir
window.addEventListener('beforeprint', () => {
    body.classList.remove('dark');
});

// Botón para ir a LinkedIn
document.getElementById('linkedin-btn').addEventListener('click', function () {
    window.open('https://linkedin.com/in/drqbeat', '_blank');
});