import { estadoPartida, setPoints, setGameOver, MAX, CardPath, DEFAULT_CARD_IMG_PATH } from "./model";
import { gameOverManageButtons, mostrarCarta, muestraPuntuacion } from "./ui";

// Función para obtener una carta aleatoria entre 1 y 12, excluyendo 8 y 9
export function dameCarta(): number {
    let carta: number;
    do {
        carta = Math.floor(Math.random() * 12) + 1;
    } while (carta === 8 || carta === 9);
    return carta;
}

export function checkIfGameOver() {
    return estadoPartida.points > MAX 
}

export function getValueToSum(valor: number): number {
    if (valor === 10 || valor === 11 || valor === 12) {
        return 0.5
    }

    return valor
}

export function sumarValorCarta(cardNumber: number) {
    setPoints(estadoPartida.points + getValueToSum(cardNumber));
    muestraPuntuacion();
    setTimeout(() => {
        if(checkIfGameOver()) {
            setGameOver(true)
            gameOverManageButtons()
            window.alert('Game Over')
        }
    }, 1);

}

export function handlePideCartaClick() {
    const carta = dameCarta()
    mostrarCarta(carta);
    sumarValorCarta(carta)
}


export function increasePoints() {
    setPoints(estadoPartida.points + 1)
    muestraPuntuacion();
}


export function decreasePoints() {
    if (estadoPartida.points > 0) {
        setPoints(estadoPartida.points - 1)
        muestraPuntuacion();
    }
}

// Función para mapear el valor de la carta a su imagen correspondiente
export function mapearCartaImagen(valor: number): string {
    const formattedValue: string = `_${valor}`;
    return CardPath[formattedValue as keyof typeof CardPath] || DEFAULT_CARD_IMG_PATH
}
