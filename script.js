let victoriasJugador = 0;
let victoriasComputadora = 0;

function jugar(eleccionJugador){
    let opciones = ["Pokemon piedra", "Pokemon papel", "Pokemon tijera"];
    let eleccionComputadora = opciones [Math.floor(Math.random()*3)];

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

document.getElementById ("resultado").innerText = resultado;

document.getElementById("puntos-jugador").innerText = victoriasJugador;
    document.getElementById("puntos-computadora").innerText = victoriasComputadora;
}
