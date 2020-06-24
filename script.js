// --- aca obtenemos los divs por medio de su id
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

// --- aca obtenemos el boton del html
const btnEmpezar = document.getElementById('btnEmpezar');

// --- una variable que guarde el ultimo nivel
const ULTIMO_NIVEL = 10;

// --- la clase juego, que tendra toda la logica de nuestro juego
class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
        
    }
    inicializar() {
        // --- con esto hacemos que el evento del click de los botones ya lleve el .bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.toggleBtnEmpezar()
        // --- aca ya con el boton, le vamos a decir que se oculte, el hide esta en el estilos.css
        // btnEmpezar.classList.add('hide');        
        // --- aca le decimos que inicie en el level 1, ya que nuestro juego tendra 10 niveles.
        this.nivel = 1;
        this.colores ={
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide');        
        }
    }

    generarSecuencia() {
        // --- con .fill le decimos que los 10 items del array tengan un valor (cero)
        // --- Math.floor no pasa los numeros decimales que arroja el Math.random, a numeros enteros.
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel() {
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
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

    transformarColorANumero(color){
        // --- aca convertimos el color a un numero
        switch (color) {
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde': 
                return 3
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

    eliminarEventosClick() {
        
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev) {
        // --- aca creamos toda la logica en donde le decimos que gano o perdio
        // --- capturamos e dataset de cada color que se presiono
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        if (numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)){
                    // GANO
                    this.ganoElJuego()
                }else {
                    setTimeout(this.siguienteNivel, 1500)
                }
            }
        }else {
            // PERDIO
            this.perdioElJuego()
        }
    }
    
    ganoElJuego() {
        swal ('Platzi','Felicitaciones, Ganaste el juego!', 'success')
        .then( () => {
            this.inicializar.bind(this)
        })
    }

    perdioElJuego() {
        swal ('Platzi','Lo lamentamos, perdiste :(', 'error')
        .then( () => {
            this.eliminarEventosClick()
        })
    }



};

// --- definimos la funcion onclick del boton
function empezarJuego(){
    window.juego = new Juego()
    
};