const valor = 200; 

function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'mensaje'; 
    resultadoDiv.innerHTML = 'Evaluando...';

    if (valor >= 100 && valor <= 300) {
        resultadoDiv.innerHTML = `✅ El valor (${valor}) se encuentra en el PRIMER RANGO [100 - 300].`;
        resultadoDiv.classList.add('correcto');
    } 

    else if (valor >= 500 && valor <= 800) {
        resultadoDiv.innerHTML = `⚠️ El valor (${valor}) se encuentra en el SEGUNDO RANGO [500 - 800].`;
        resultadoDiv.classList.add('alerta');
    } 

    else {
        resultadoDiv.innerHTML = `❌ El valor (${valor}) no se encuentra en ningún rango válido.`;
        resultadoDiv.classList.add('incorrecto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 5: Especificar Rango (IF-ELSE IF)';
    document.getElementById('instrucciones').textContent = `Indicar si el valor (${valor}) está en el primer rango (100-300), segundo rango (500-800) o en ninguno.`;
});