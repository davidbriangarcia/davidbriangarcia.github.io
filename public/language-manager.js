// public/language-manager.js

// Define translations for pages that use this dynamic method
const translations = {
    'index': {
        en: {
            'hero-subtitle': 'Automate your PC like a pro. Record and run macros with precision.',
            'hero-download': 'Download now',
            'hero-eula': 'By downloading, you agree to the <a href="https://autoplaype.com/eula/" class="underline hover:text-white">EULA</a>.',
            'features-title': 'What can you do with AutoPlay?',
            'feature-1-title': '🎥 Record and replay actions',
            'feature-1-desc': 'Capture clicks, mouse movements, and keystrokes with millimetric precision.',
            'feature-2-title': '🔥Assign hotkeys to boring actions.',
            'feature-2-desc': 'Run your macros with a single key or key combination to automate actions effortlessly.',
            'feature-3-title': '⚡ Quick execution',
            'feature-3-desc': 'Assign pre-recorded macros to side buttons to launch them instantly.',
            'feature-4-title': '🛠️ Advanced modifiers',
            'feature-4-desc': 'Add delay or repeat your macros as many times as you need.',
            'feature-5-title': '🪶 Portable and lightweight',
            'feature-5-desc': 'No installers or setup. Just download the 1MB .exe, and run it.',
            'feature-6-title': '💾 Save and load macros',
            'feature-6-desc': 'Export your macros as .json files for easy reuse.',
            'feature-7-title': '🔐 Secure by design',
            'feature-7-desc': 'Your data stays safe with built-in encryption and auto-login secured.',
            'feature-8-title': '🌐 Multi-language ready',
            'feature-8-desc': 'Now available in English and Spanish — more languages coming soon!',
            'preview-title': 'Program Preview',
            'preview-desc': 'This is how AutoPlay looks in action: recording and editing your macros.',
            'pricing-title': 'Free vs PRO',
            'table-feature': 'Feature',
            'table-free': 'Free',
            'table-pro': 'PRO',
            'feature-simultaneous': 'Simultaneous Macros',
            'feature-simultaneous-pro': 'Unlimited',
            'feature-hotkeys': 'Hotkeys',
            'feature-saveload': 'Save/Load .json',
            'feature-support': 'Special Support',
            'feature-future': 'Future features',
            'table-price': 'Price',
            'table-price-free': 'Free',
            'table-price-pro': '$2/ month',
            'cta-title': 'Unlock your productivity',
            'cta-subtitle': 'For only <span class="font-bold text-green-300">$2 monthly</span> access the full power of AutoPlay.',
            'cta-compatibility': 'Compatible with Windows 10 and 11',
            'footer-copyright': '© 2025 DaveSoftwarePeru. All rights reserved.'
        },
        es: {
            'hero-subtitle': 'Automatiza tu PC como un profesional. Graba y ejecuta macros con precisión.',
            'hero-download': 'Descargar ahora',
            'hero-eula': 'Al descargar, aceptas el <a href="https://autoplaype.com/eula/" class="underline hover:text-white">EULA</a>.',
            'features-title': '¿Qué puedes hacer con AutoPlay?',
            'feature-1-title': '🎥 Graba y reproduce acciones',
            'feature-1-desc': 'Captura clics, movimientos del ratón y pulsaciones de teclas con precisión milimétrica.',
            'feature-2-title': '🔥 Asigna atajos a acciones aburridas.',
            'feature-2-desc': 'Ejecuta tus macros con una sola tecla o combinación de teclas para automatizar acciones sin esfuerzo.',
            'feature-3-title': '⚡ Ejecución rápida',
            'feature-3-desc': 'Asigna macros pregrabadas a los botones laterales o teclas de acceso rápido para lanzarlas al instante.',
            'feature-4-title': '🛠️ Modificadores avanzados',
            'feature-4-desc': 'Añade una espera antes de cada macro o repite tus macros tantas veces como necesites.',
            'feature-5-title': '🪶 Portátil y ligero',
            'feature-5-desc': 'Sin instaladores ni configuración. Solo descarga el .exe de 1MB y ejecútalo.',
            'feature-6-title': '💾 Guarda y carga macros',
            'feature-6-desc': 'Exporta tus macros como archivos .json para reutilizarlos fácilmente.',
            'feature-7-title': '🔐 Seguro por diseño',
            'feature-7-desc': 'Tus datos permanecen seguros con encriptación incorporada y auto-login asegurado.',
            'feature-8-title': '🌐 Listo para varios idiomas',
            'feature-8-desc': 'Ahora disponible en inglés y español — ¡más idiomas próximamente!',
            'preview-title': 'Vista Previa del Programa',
            'preview-desc': 'Así es como se ve AutoPlay en acción: grabando y editando tus macros.',
            'pricing-title': 'Gratis vs PRO',
            'table-feature': 'Característica',
            'table-free': 'Gratis',
            'table-pro': 'PRO',
            'feature-simultaneous': 'Macros simultáneos',
            'feature-simultaneous-pro': 'Ilimitados',
            'feature-hotkeys': 'Atajos',
            'feature-saveload': 'Guardar/Cargar .json',
            'feature-support': 'Soporte Especial',
            'feature-future': 'Futuras características',
            'table-price': 'Precio',
            'table-price-free': 'Gratis',
            'table-price-pro': '$2/ mes',
            'cta-title': 'Desbloquea tu productividad',
            'cta-subtitle': 'Por solo <span class="font-bold text-green-300">$2 mensuales</span> accede a todo el poder de AutoPlay.',
            'cta-compatibility': 'Compatible con Windows 10 y 11',
            'footer-copyright': '© 2025 DaveSoftwarePeru. Todos los derechos reservados.'
        }
    }
    // Add other pages' translations here, e.g., 'help-index': { en: {...}, es: {...} }
};

function setLanguage(lang) {
    // Save the preference
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;

    // Handle pages with content switching (like help pages)
    const contentEn = document.querySelectorAll('[data-lang="en"]');
    const contentEs = document.querySelectorAll('[data-lang="es"]');

    if (contentEn.length > 0 && contentEs.length > 0) {
        if (lang === 'es') {
            contentEn.forEach(el => el.classList.add('hidden'));
            contentEs.forEach(el => el.classList.remove('hidden'));
        } else {
            contentEs.forEach(el => el.classList.add('hidden'));
            contentEn.forEach(el => el.classList.remove('hidden'));
        }
    }

    // Handle pages with dynamic text replacement (like the main index)
    const pageKey = document.body.dataset.pageKey;
    if (pageKey && translations[pageKey]) {
        const trans = translations[pageKey][lang];
        for (const id in trans) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = trans[id];
            }
        }
    }
    
    // Update any language switchers on the page
    const switchers = document.querySelectorAll('.language-switcher');
    switchers.forEach(switcher => {
        if (switcher.value !== lang) {
            switcher.value = lang;
        }
    });
}

function createLanguageSwitcher() {
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'flex justify-end mb-4';
    
    const select = document.createElement('select');
    select.className = 'language-switcher bg-gray-800 border border-gray-600 rounded-md py-2 px-4 text-white';
    select.innerHTML = `
        <option value="en">English</option>
        <option value="es">Español</option>
    `;
    
    select.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    switcherContainer.appendChild(select);
    return switcherContainer;
}


document.addEventListener('DOMContentLoaded', () => {
    // Set language on initial load
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);

    // Add language switcher to pages that need it
    const switcherPlaceholder = document.getElementById('language-switcher-placeholder');
    if (switcherPlaceholder) {
        switcherPlaceholder.appendChild(createLanguageSwitcher());
        // Set the initial value of the newly created switcher
        const newSwitcher = switcherPlaceholder.querySelector('.language-switcher');
        if (newSwitcher) {
            newSwitcher.value = savedLang;
        }
    }
});
