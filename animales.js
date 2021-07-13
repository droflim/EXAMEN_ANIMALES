export default 
class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
  
    constructor(nombre, edad, img, comentarios, sonido) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#img = img;
      this.#comentarios = comentarios;
      this.#sonido = sonido;
    }
  
    get Nombre() {
      return this.#nombre;
    }
  
    get Edad() {
      return this.#edad;
    }
  
    get Img() {
      return this.#img;
    }
  
    get Sonido() {
      return this.#sonido;
    }
  
    set Comentarios(comentarios) {
      this.#comentarios = comentarios;
    }
  
    get Comentarios() {
      return this.#comentarios;
    }
  }
  
  class Leon extends Animal {
    constructor(...args) {
      super(...args);
    }
  
    Rugir() {
      console.log("rooooar");
    }
  }
  
  class Lobo extends Animal {
    constructor(...args) {
      super(...args);
    }
  
    Aullar() {
      console.log("auuuuuuu");
    }
  }
  
  class Oso extends Animal {
    constructor(...args) {
      super(...args);
    }
  
    Gruñir() {
      console.log("grrrrrrr");
    }
  }
  
  class Serpiente extends Animal {
    constructor(...args) {
      super(...args);
    }
  
    Sisear() {
      console.log("zzzzzzzzz");
    }
  }
  
  class Aguila extends Animal {
    constructor(...args) {
      super(...args);
    }
  
    Chillar() {
      console.log("chrrrchrhchrhchr");
    }
  }