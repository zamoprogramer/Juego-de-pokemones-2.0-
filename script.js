let victoriasJugador = 0;
let victoriasComputadora = 0;


function jugar(eleccionJugador){
    let opciones = ["Pokemon piedra", "Pokemon papel", "Pokemon tijera","Pokemon fuego","Pokemon electrico" , "Pokemon agua"];
    let eleccionComputadora = opciones [Math.floor(Math.random()*opciones.length)];




    let reglas = {
        "Pokemon piedra": ["Pokemon tijera", "Pokemon fuego"], 
        "Pokemon papel": ["Pokemon piedra", "Pokemon agua"],
        "Pokemon tijera": ["Pokemon papel","Pokemon tijera"],
        "Pokemon fuego": ["Pokemon papel" , "Pokemon tijera"],
        "Pokemon agua": ["Pokemon piedra", "Pokemon fuego"],
        "Pokemon electrico" : ["Pokemon papel", "Pokemon piedra "]
    }; 

    let resultado ="";


    if (eleccionJugador === eleccionComputadora){
        resultado = "🤝 ¡Empate ✌🏼  ! Ambos eligieron  " + eleccionJugador + "Vamos otra vez";
        }

        else if (
            (eleccionJugador === "Pokemon piedra" && eleccionComputadora === "Pokemon tijera") ||
            (eleccionJugador === "Pokemon tijera" && eleccionComputadora === "Pokemon papel") ||
            (eleccionJugador === "Pokemon papel" && eleccionComputadora === "Pokemon piedra")
        ){
            resultado = "🎉 ¡Ganaste en hora buena yo sabia que tu podias ! " + eleccionJugador + " vence a " + eleccionComputadora;
            victoriasJugador++;
        } else {
            resultado = "😞 Perdiste... what a shame  " + eleccionComputadora + " vence a " + eleccionJugador;
            victoriasComputadora++;          
}

if ( victoriasJugador === 5) {
    alert("¡Felicidades! Has ganado el juego.");
    reiniciarJuego();
  } else if ( victoriasComputadora === 5) {
    alert("¡La computadora ha ganado el juego! Inténtalo de nuevo.");
    reiniciarJuego();
  }


document.getElementById ("resultado").innerText = resultado;
document.getElementById("puntos-jugador").innerText = victoriasJugador;
    document.getElementById("puntos-computadora").innerText = victoriasComputadora;
}

function reiniciarJuego() {
    victoriasJugador = 0 ;
    victoriasComputadora = 0;
    document.getElementById("puntos-jugador").innerText = victoriasJugador;
    document.getElementById("puntos-computadora").innerText = victoriasComputadora;
    document.getElementById("resultado").innerText = "El juego ha sido reiniciado. ¡Elige tu Pokémon para empezar!";
}

