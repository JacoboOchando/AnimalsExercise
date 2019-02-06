class AnimalClass {

  constructor(especie = "perro", patas, gritito, vuela = false) {
    this.especie = especie;
    this.patas = patas;
    this.gritito = gritito;
    this.vuela = vuela;
    console.log(this.especie, this.patas, this.gritito, this.vuela)
  }

  get getVuela() { return this.vuela; }
  set setVuela(value) { this.vuela = value; }

  gritar() {
    console.log("El sonido de la especie " + this.especie + " es: " + this.gritito)
  }

  tipoAlimentacion(comida) {
    console.log("Este animal come: " + comida)
  }
}

class GatoClass extends AnimalClass {

  constructor(especie = "perro", patas, gritito, vuela = false, color, peso) {
    super(especie, patas, gritito, vuela);
    this.color = color;
    this.peso = peso;
  }

  arañar() {
    console.log("Soy capaz de arañar")
  }

  saltar() {
    console.log("Doy saltos infinitos")
  }
  maullar() {
    super.gritar();
  }
}

function crearAnimal(especie, patas, gritito, vuela) {
  return new AnimalClass(especie, patas, gritito, vuela);
}

function nuevoAnimal(especie, patas, gritito, vuela) {

  let animal1 = crearAnimal(especie, patas, gritito, vuela);
  animal1.gritar();
  animal1.tipoAlimentacion("mucha, mucha carne");

}

function crearGato(especie, patas, gritito, vuela, color, peso) {
  return new GatoClass(especie, patas, gritito, vuela, color, peso)
}

function nuevoGato(especie, patas, gritito, vuela, color, peso) {

  let gato1 = crearGato(especie, patas, gritito, vuela, color, peso);
  gato1.arañar();
  gato1.saltar();
  gato1.maullar();
  gato1.tipoAlimentacion("quiero comerme un lindo gatito");
  volar(gato1, true);
}

function volar(animal, puedoVolar) {
  if (animal.getVuela) {
      console.log("Ya puedo volar por mi mismo");
      return;
  }
  
  animal.setVuela = puedoVolar;

  if (animal.getVuela) {
      console.log("Ahora puedo volar");    
  }
  else {
      console.log("Todavia no puedo volar");
  }
}