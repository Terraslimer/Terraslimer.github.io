const valor = 250; 

function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'mensaje'; 
    resultadoDiv.innerHTML = 'Evaluando...';

    if (valor >= 100 && valor <= 300) {
        resultadoDiv.innerHTML = `✅ El valor (${valor}) está DENTRO del rango [100 - 300].`;
        resultadoDiv.classList.add('correcto');
    } else {
        resultadoDiv.innerHTML = `❌ El valor (${valor}) está FUERA del rango [100 - 300].`;
        resultadoDiv.classList.add('incorrecto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 3: Rango [100 - 300] con AND (&&)';
    document.getElementById('instrucciones').textContent = `Comprobar si el valor (${valor}) se encuentra o no en el rango de 100 a 300.`;
});