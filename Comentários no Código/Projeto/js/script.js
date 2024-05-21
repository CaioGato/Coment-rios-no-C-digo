// Função para calcular a soma de dois números
function soma(a, b) {
    return a + b;  // Retorna a soma
}

/*
 * Função para calcular a média de uma lista de números.
 * @param {Array} numeros - Lista de números.
 * @return {number} Média dos números.
 */
function calcularMedia(numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total / numeros.length;
}


// moduloA.js
export function funcaoA() {
    // ...
}

// moduloB.js
import { funcaoA } from './moduloA.js';
function funcaoB() {
    // ...
}
export { funcaoB };
