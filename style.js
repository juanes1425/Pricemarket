// Espera a que se cargue el contenido del DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al contenedor de burbujas
    const bubbleContainer = document.querySelector('.bubbles');

    // Crea un bucle para agregar las burbujas
    for (let i = 0; i < 128; i++) {
        // Crea un elemento div para representar una burbuja
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Asigna las propiedades personalizadas para controlar la animación
        bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
        bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
        bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
        bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
        bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);

        // Agrega la burbuja al contenedor
        bubbleContainer.appendChild(bubble);
    }
});
