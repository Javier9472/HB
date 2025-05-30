// 1. Mostrar la carta al hacer clic en el botón
document.getElementById('botonCarta').addEventListener('click', function () {
  const carta = document.getElementById('carta');
  carta.classList.toggle('visible');
});

// 2. Carrusel de fotos y videos (intercalado)
const carrusel = document.getElementById('carrusel');

// Lista de contenido: alternamos imagen / video
const contenido = [
  { tipo: 'img', src: 'media/Imagen1.jpg' },
  { tipo: 'video', src: 'media/Video1.mp4' },
  { tipo: 'img', src: 'media/Imagen2.jpg' },
  { tipo: 'img', src: 'media/Imagen3.jpg' },
  { tipo: 'video', src: 'media/Video2.mp4' },
  { tipo: 'img', src: 'media/Imagen4.jpg' },
  { tipo: 'img', src: 'media/Imagen5.jpg' }
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
