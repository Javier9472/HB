// 1. Mostrar la carta al hacer clic en el botón
document.getElementById('botonCarta').addEventListener('click', function () {
  const carta = document.getElementById('carta');
  carta.classList.toggle('visible');
});

// 2. Carrusel de fotos y videos (intercalado)
const carrusel = document.getElementById('carrusel');

// Lista de contenido: alternamos imagen / video
const contenido = [
  { tipo: 'img', src: 'media/imagen1.jpg' },
  { tipo: 'video', src: 'media/video1.mp4' },
  { tipo: 'img', src: 'media/imagen2.jpg' },
  { tipo: 'img', src: 'media/imagen3.jpg' },
  { tipo: 'video', src: 'media/video2.mp4' },
  { tipo: 'img', src: 'media/imagen4.jpg' },
  { tipo: 'img', src: 'media/imagen5.jpg' }
];

// Función para crear los elementos y agregarlos al carrusel
contenido.forEach(item => {
  let elemento;

  if (item.tipo === 'img') {
    elemento = document.createElement('img');
    elemento.src = item.src;
    elemento.alt = 'Foto para Kiara';
  } else if (item.tipo === 'video') {
    elemento = document.createElement('video');
    elemento.src = item.src;
    elemento.controls = true;
  }

  carrusel.appendChild(elemento);
});
