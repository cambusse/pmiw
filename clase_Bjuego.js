class juego {
  constructor() {
    // Inicialización de variables
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
    this.prot = new Protagonista(width / 2, 560, 35, 40, 307, 540, 20, 20, 316, 600, 5, 15);
    this.Lluvia = [];
    for (let i = 0; i < 20; i++) {
      this.Lluvia[i] = new lluvia(i * 30, random(-height, 0), 10, 50); // Cambiar tamaño
    }
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
  }

  reiniciar() {
    this.prot = new Protagonista(width / 2, 560, 35, 40, 307, 540, 20, 20, 316, 600, 5, 15);
    this.Lluvia = [];
    for (let i = 0; i < 20; i++) {
      this.Lluvia[i] = new lluvia(i * 30, random(-height, 0), 10, 50); // Cambiar tamaño
    }
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
  }

  dibujar() {
    this.prot.mostrar();
    for (let i = 0; i < 20; i++) {
      this.Lluvia[i].mostrarLluvia();
      this.Lluvia[i].Cae();
    }
  }

  
  
  
  
  
// -----------------------------------------------
// Métodos de movimiento del protagonista
// -----------------------------------------------
  moverProtagonista(tecla) {
    this.tec = tecla;
    if (this.tec === UP_ARROW) {
      this.prot.moverAr();
    } else if (this.tec === DOWN_ARROW) {
      this.prot.moverAb();
    } else if (this.tec === LEFT_ARROW) {
      this.prot.moverI();
    } else if (this.tec === RIGHT_ARROW) {
      this.prot.moverD();
    }
  }

  
  detectarColision() {
    for (let i = 0; i < this.Lluvia.length; i++) {
      if (this.Lluvia[i].golpea) {
        if (this.prot.colisiona(this.Lluvia[i])) {
          this.Lluvia[i].golpea = false; // Se ha golpeado la lluvia
          background(0, 200, 25); // Cambia el fondo
          this.Lluvia[i].ly = -this.Lluvia[i].lalto; // Reinicia la lluvia
          this.golpes++; // Incrementa el contador de golpes
        }
      }
      
      // Verifica si se ha perdido
      if (this.golpes >= 3) {
        this.perdiste = true;
      }
      
      // Verifica si se ha ganado
      if (this.prot.y < 0) {
        this.ganaste = true;
      }
    }
  }
}
