const valor = 200; 

function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = 'mensaje'; 
    resultadoDiv.innerHTML = 'Evaluando...';

    if (valor === 100) {
        resultadoDiv.innerHTML = '✅ Correcto! El valor es exactamente igual a 100.';
        resultadoDiv.classList.add('correcto');
    } else {
        resultadoDiv.innerHTML = `❌ El valor NO es igual a 100. El valor actual es: ${valor}`;
        resultadoDiv.classList.add('incorrecto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 2: ¿Es igual a 100 o no? (IF-ELSE)';
    document.getElementById('instrucciones').textContent = `Comprobar si la variable 'valor' (actualmente ${valor}) es 100 o no.`;
});