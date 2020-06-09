// --- aca obtenemos los divs por medio de su id
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

// --- aca obtenemos el boton del html
const btnEmpezar = document.getElementById('btnEmpezar')

// --- la clase juego, que tendra toda la logica de nuestro juego
class Juego {
    constructor() {
        this.inicializar()
    }
    inicializar() {
        // --- aca ya con el boton, le vamos a decir que se oculte, el hide esta en el estilos.css
        btnEmpezar.classList.add('hide')
        console.log('si sirvo')
    }

}

// --- definimos la funcion onclick del boton
function empezarJuego(){
    var juego = new Juego()
    
}