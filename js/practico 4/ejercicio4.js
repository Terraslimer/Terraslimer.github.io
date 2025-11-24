const valor = 550; 

function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'mensaje'; 
    resultadoDiv.innerHTML = 'Evaluando...';

    const enPrimerRango = valor >= 100 && valor <= 300;
    const enSegundoRango = valor >= 500 && valor <= 800;

    if (enPrimerRango || enSegundoRango) {
        resultadoDiv.innerHTML = `✅ El valor (${valor}) está DENTRO de los rangos válidos (100-300 o 500-800).`;
        resultadoDiv.classList.add('correcto');
    } else {
        resultadoDiv.innerHTML = `❌ El valor (${valor}) está FUERA de los rangos válidos.`;
        resultadoDiv.classList.add('incorrecto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 4: Rangos Válidos con OR (||)';
    document.getElementById('instrucciones').textContent = `Comprobar si el valor (${valor}) está dentro de los rangos válidos de 100-300 o 500-800.`;
});