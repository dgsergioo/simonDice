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
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar() {
        // --- con esto hacemos que el evento del click de los botones ya lleve el .bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        // --- aca ya con el boton, le vamos a decir que se oculte, el hide esta en el estilos.css
        btnEmpezar.classList.add('hide');        
        // --- aca le decimos que inicie en el level 1, ya que nuestro juego tendra 10 niveles.
        this.nivel = 1;
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

    siguienteNivel() {
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformaNumeroAColor(numero){
        // --- aca asignamos cada color a 1 numero con un switch
        switch (numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3: 
                return 'verde'
        }
    }

    iluminarSecuencia() {
        for(let i = 0; i < this.nivel; i++){
            // --- aca capturamos el color
            const color = this.transformaNumeroAColor(this.secuencia[i])
            // --- aca llamamos una funcion para que ilumine el color
            // --- tambien con el setTimeout generamos que ilumine de apocos los colores
            setTimeout(() => {
                this.iluminarColor(color)
            }, 1000 * i)
        }
    }

    iluminarColor(color) {
        // --- aca le agregamos una clase a los botones que ya habiamos creado en el CSS
        this.colores[color].classList.add('light')
        // --- con es settimeout le decimos que apague el color o lo vuelva a la normalidad
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick() {
        // --- aca capturamos todos los eventos al hacer click sobre cada color
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    elegirColor(ev) {

    }




};

// --- definimos la funcion onclick del boton
function empezarJuego(){
    window.juego = new Juego()
    
};