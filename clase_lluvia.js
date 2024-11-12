// -----------------------------------------------
// Clase lluvia
// -----------------------------------------------
class lluvia {
  constructor(lx, ly, lancho, lalto) {
    this.lx = lx;
    this.ly = ly;
    this.lancho = lancho; // Ancho del rectángulo
    this.lalto = lalto;   // Alto del rectángulo
    this.dx = random(2, 3); // Velocidad de movimiento horizontal
  }

  mostrarLluvia() {
    fill(26, 142, 9);
    rect(this.lx, this.ly, this.lancho, this.lalto);
  }

Cae() {
  this.lx -= this.dx; // Movimiento horizontal

  // Reiniciar la gota si sale de la pantalla
  if (this.lx < 0) {
    this.lx = width + random(0, width); // Reiniciar en una posición aleatoria a la derecha
    this.ly = random(height) // Mantener la posición vertical aleatoria
  }
}
}
