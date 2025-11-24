const valor = 100;

function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'mensaje'; 
    resultadoDiv.innerHTML = 'Evaluando...';

    if (valor === 100) {
        resultadoDiv.innerHTML = '✅ Correcto! El valor es exactamente igual a 100.';
        resultadoDiv.classList.add('correcto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 1: ¿Es igual a 100? (IF)';
    document.getElementById('instrucciones').textContent = `Comprobar si la variable 'valor' (actualmente ${valor}) es 100.`;
});