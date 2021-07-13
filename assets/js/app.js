

(async function () {
  const animalElement = document.getElementById("animal");
  const edadElement = document.getElementById("edad");
  const comentariosElement = document.getElementById("comentarios");
  const previewElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");
  const MostrarImagen = document.getElementById("test");
  const Request = await fetch("/animales.json");
  const { animales: Animales } = await Request.json();

  animalElement.addEventListener("change", (event) => {
    // console.log({ event });
    const nombreDelAnimalElegido = animalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreDelAnimalElegido
    );

    previewElement.setAttribute(
      "src",
      `./assets/imgs/${animalEncontrado.imagen}`
    );
  });
 
  
  btnRegistrarElement.addEventListener("click", () => {
    
    const element = document.getElementById("test")
    const ImgElement = document.createElement("h1");
    ImgElement.innerHTML = `<img type ="button "style="width: 10rem;" src="./assets/imgs/${animal.img}" >`;
    
    
    element.insertAdjacentHTML('afterend',ImgElement.outerHTML)
      console.log(MostrarImagen)

    console.log({ nombre, edad, comentarios });
  });
  
})();
