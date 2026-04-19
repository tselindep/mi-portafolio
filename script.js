// Interactividad simple
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-saludo');

    if (boton) {
        boton.addEventListener('click', () => {
            alert('¡Bienvenido a mi portafolio! Este mensaje fue gestionado con JavaScript.');
            console.log('Interacción registrada exitosamente.');
        });
    }
});