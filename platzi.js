var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

//Objeto literal//
var fondo = {
    url: "tile.webp",
    cargaOK: false
}

var vaca = {
    url: "vaca.webp",
    cargaOK: false
};
//Fin de objeto literal//

var cantidad = aleatorio (5,25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

//var cerdo = new Image();
//cerdo.src = "cerdo.webp";
//cerdo.addEventListener("load", cargarCerdos);

//var pollo = new Image();
//pollo.src = "pollo.webp";
//pollo.addEventListener("load", cargarPollos);

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0)
    }

    if (vaca.cargaOK) {

        
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y)
        }

    }
}


function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}