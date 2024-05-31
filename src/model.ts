// Data
export const MIN = 0;
export const MAX = 7.5;
export const DEFAULT_CARD_IMG_PATH = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
export const estadoPartida = {
    points: MIN,
    stay: false,
    gameOver: false
}

export enum CardPath {
    '_1' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg',
    '_2' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg',
    '_3' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg',
    '_4' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg',
    '_5' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg',
    '_6' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg',
    '_7' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg',
    '_10' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg',
    '_11' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg',
    '_12' = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg',
}

// Funciones para modificar el estado de la partida
export function setPoints(newPointsValue: number) {
     estadoPartida.points = newPointsValue
}

export function setStay(newStayValue: boolean) {
    estadoPartida.stay = newStayValue
}

export function setGameOver(newGameOverValue: boolean) {
    estadoPartida.gameOver = newGameOverValue
}


