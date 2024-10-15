let imagenes = [];
let Empieza = 0; // Índice de la imagen actual
let botonSiguiente; // Variable para el botón
let botonAceptar; // Botón para aceptar
let botonRechazar; // Botón para rechazar

function preload() {
  let pantallas = [
    "data/aa.jpg", "data/a1.jpg", "data/a2.jpg", "data/a3.jpg", "data/a4.png",
    "data/af.jpg", "data/b3.jpg", "data/bf.jpg", "data/bisf.jpg",
    "data/c4.jpg", "data/c5.jpg", "data/c6.jpg", "data/c7.jpg",
    "data/cf.jpg", "data/d7.jpg", "data/df.jpg"
  ];

  for (let i = 0; i < pantallas.length; i++) {
    let img = loadImage(pantallas[i]); // Carga cada imagen
    imagenes.push(img); // Agrega la imagen al arreglo global
  }
}

function setup() {
  createCanvas(640, 480);
  
  // Botón para la siguiente imagen
  botonSiguiente = createButton('Siguiente Imagen');
  botonSiguiente.position(10, 10);
  botonSiguiente.mousePressed(cambiarImagen); // Asigna la función al botón
  
  botonAceptar = createButton('Aceptar');
  botonAceptar.position(10, 40);
  botonAceptar.mousePressed(irA3); // Asigna la función al botón
  botonAceptar.hide(); // Oculta el botón inicialmente

  botonRechazar = createButton('Rechazar');
  botonRechazar.position(600, 40);
  botonRechazar.mousePressed(irB3); // Cambia a la imagen "b3.jpg"
  botonRechazar.hide(); // Oculta el botón inicialmente
  
  mostrarAA(); // Llama a la función para mostrar "aa.jpg"
}

function draw() {
  background(280);

  // Dibuja la imagen actual solo si está cargada
  if (imagenes[Empieza]) {
    image(imagenes[Empieza], 0, 0, 640, 480); // Dibuja la imagen actual
  }
}

function cambiarImagen() {
  Empieza = (Empieza + 1) % imagenes.length; // Cambia a la siguiente imagen
  
  // Muestra u oculta botones según la imagen actual
  if (Empieza === 2) { // Si la imagen actual es "a2.jpg"
    botonAceptar.show();
    botonRechazar.show();
  } else {
    botonAceptar.hide();
    botonRechazar.hide();
  }
}

function irA3() {
  Empieza = 3; // Cambia al índice de la imagen "a3.jpg"
  botonAceptar.hide(); // Oculta el botón "Aceptar"
  botonRechazar.hide(); // Oculta el botón "Rechazar"
}

function irB3() {
  Empieza = 6; // Cambia al índice de la imagen "b3.jpg"
  botonAceptar.hide(); // Oculta el botón "Aceptar"
  botonRechazar.hide(); // Oculta el botón "Rechazar"
}

// Función para mostrar la imagen "aa.jpg"
function mostrarAA() {
  Empieza = 0; // Cambia a la imagen "aa.jpg"
  botonAceptar.hide(); // Asegúrate de que los botones estén ocultos
  botonRechazar.hide(); // Asegúrate de que los botones estén ocultos
}
