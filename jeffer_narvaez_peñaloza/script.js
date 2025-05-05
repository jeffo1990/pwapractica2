const imagenes = ["imagen1.jpeg", "imagen2.webp", "imagen3.jpg"];
let indice = 0;

const imagen = document.getElementById("imagen");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    imagen.src = imagenes[indice];
});

nextBtn.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    imagen.src = imagenes[indice];
});
