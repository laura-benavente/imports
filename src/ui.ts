import { estadoPartida, setPoints, setGameOver, setStay, MIN, MAX } from "./model";
import { decreasePoints, handlePideCartaClick, increasePoints, mapearCartaImagen } from "./motor";

const pointsDisplay = document.getElementById('pointsDisplay') as HTMLDivElement;
export function muestraPuntuacion() {
    pointsDisplay.textContent = `Puntos: ${estadoPartida.points}`;
}


export const showMessage = (): void => {
    
    let message = ''
    stayManageButtons()

    switch (true) {
        case estadoPartida.points < 4:
            message = 'Has sido muy conservador';
            break;
        case estadoPartida.points === 5:
            message = 'Te ha entrado el canguelo eh?';
            break;
        case (estadoPartida.points >= 6 &&
            estadoPartida.points <= 7):
            message = 'Casi casi...';
        case estadoPartida.points === MAX:
            message = '¡ Lo has clavado! ¡Enhorabuena!';
            break
    }

    window.alert(message)
};



const increaseButton = document.getElementById('increaseButton') as HTMLButtonElement;
const decreaseButton = document.getElementById('decreaseButton') as HTMLButtonElement;
const stayButton = document.getElementById('stayButton') as HTMLButtonElement;
const newGameButton = document.getElementById('newGameButton') as HTMLButtonElement;
const nextMoveButton = document.getElementById('nextMoveButton') as HTMLButtonElement;


if (increaseButton !== null && increaseButton !== undefined) {
    increaseButton.addEventListener('click', increasePoints);
}
else {
    console.log("El boton no existe")
}
if (decreaseButton !== null && decreaseButton !== undefined) {
    decreaseButton.addEventListener('click', decreasePoints);
}
else {
    console.log("El boton no existe")
}
if (stayButton !== null && stayButton !== undefined) {
    stayButton.addEventListener('click', showMessage);
}
else {
    console.log("El boton no existe")
}
if (newGameButton !== null && newGameButton !== undefined) {
    newGameButton.addEventListener('click', newGame);
}

else {
    console.log("El boton no existe")
}
if (nextMoveButton !== null && nextMoveButton !== undefined) {
    nextMoveButton.addEventListener('click', handlePideCartaClick)
}
else {
    console.log("El boton no existe")
}

const pideCartaButton = document.getElementById('randomCardButton') as HTMLButtonElement;


if (pideCartaButton !== null && pideCartaButton !== undefined) {
    pideCartaButton.addEventListener('click', handlePideCartaClick);
}
else {
    console.log("El boton no existe")
}

export function newGame() {
    setPoints(MIN);
    muestraPuntuacion();
    setGameOver(false);
    setStay(false);
    mostrarCarta(MIN)
    muestraPuntuacion()
    newGameManageButtons()
}

export function mostrarCarta(valor: number) {
    const cartaImagen = document.getElementById('cartaImagen') as HTMLImageElement;
    cartaImagen.src = mapearCartaImagen(valor);
}


export const newGameManageButtons = () => {
    newGameButton.classList.add('hiden')
    newGameButton.classList.remove('show')
    nextMoveButton.classList.add('hiden')
    nextMoveButton.classList.remove('show')
    stayButton.classList.add('show')
    stayButton.classList.remove('hiden')
};

export const stayManageButtons = () => {
    newGameButton.classList.add('show')
    newGameButton.classList.remove('hiden')
    nextMoveButton.classList.add('show')
    nextMoveButton.classList.remove('hiden')
    stayButton.classList.add('hiden')
    stayButton.classList.remove('show')
};

export const gameOverManageButtons = () => {
    newGameButton.classList.add('show')
    nextMoveButton.classList.add('hiden')
    stayButton.classList.add('hiden')
};