// --- aca obtenemos los divs por medio de su id
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

// --- aca obtenemos el boton del html
const btnEmpezar = document.getElementById('btnEmpezar');

// --- la clase juego, que tendra toda la logica de nuestro juego
class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
    }
    inicializar() {
        // --- aca ya con el boton, le vamos a decir que se oculte, el hide esta en el estilos.css
        btnEmpezar.classList.add('hide');
        
        // --- aca le decimos que inicie en el level 1, ya que nuestro juego tendra 10 niveles.
        this.nivel1 = 1;
        this.colores ={
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia() {
        // --- con .fill le decimos que los 10 items del array tengan un valor (cero)
        // --- Math.floor no pasa los numeros decimales que arroja el Math.random, a numeros enteros.
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

};

// --- definimos la funcion onclick del boton
function empezarJuego(){
    var juego = new Juego()
    
};