const valor = 450; 

function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'mensaje'; 
    resultadoDiv.innerHTML = 'Evaluando...';
    
    if (valor < 100) {
        resultadoDiv.innerHTML = `⬇️ El valor (${valor}) está ANTES de los rangos válidos.`;
        resultadoDiv.classList.add('alerta');
    } 

    else if (valor >= 100 && valor <= 300) {
        resultadoDiv.innerHTML = `✅ El valor (${valor}) está en el PRIMER RANGO [100 - 300].`;
        resultadoDiv.classList.add('correcto');
    } 

    else if (valor > 300 && valor < 500) {
        resultadoDiv.innerHTML = `⚠️ El valor (${valor}) está ENTRE los rangos (zona no válida).`;
        resultadoDiv.classList.add('incorrecto');
    } 

    else if (valor >= 500 && valor <= 800) {
        resultadoDiv.innerHTML = `👍 El valor (${valor}) está en el SEGUNDO RANGO [500 - 800].`;
        resultadoDiv.classList.add('correcto');
    } 

    else {
        resultadoDiv.innerHTML = `⬆️ El valor (${valor}) SUPERA los rangos definidos.`;
        resultadoDiv.classList.add('incorrecto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 6: Clasificación Compleja (Cadena IF-ELSE IF)';
    document.getElementById('instrucciones').textContent = `Clasificar el valor (${valor}) en una de cinco categorías.`;
});