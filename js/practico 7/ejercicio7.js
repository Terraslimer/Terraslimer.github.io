function ejecutarEjercicio() {
    const resultadoDiv = document.getElementById('resultado');

    const opcionSeleccionada = document.getElementById('opcionMenu').value; 
    
    resultadoDiv.className = 'mensaje'; 
    let mensaje = '';

    switch (opcionSeleccionada) {
        case 'INS':
            mensaje = '➕ Seleccionó INSERTAR. Se creará un nuevo registro.';
            resultadoDiv.classList.add('correcto');
            break; 
        case 'DEL':
            mensaje = '🗑️ Seleccionó ELIMINAR. Se borrará un registro existente.';
            resultadoDiv.classList.add('incorrecto');
            break;
        case 'UPD':
            mensaje = '✏️ Seleccionó ACTUALIZAR. Se modificará la información.';
            resultadoDiv.classList.add('alerta');
            break;
        case 'LST':
            mensaje = '📋 Seleccionó LISTAR. Se mostrarán todos los registros.';
            resultadoDiv.classList.add('correcto');
            break;
        case 'END':
            mensaje = '👋 Seleccionó FINALIZAR. Se cerrará el sistema.';
            resultadoDiv.classList.add('alerta');
            break;
        default:

            mensaje = '⚠️ Opción no válida. Por favor, seleccione una del menú.';
            resultadoDiv.classList.add('incorrecto');
    }

    resultadoDiv.innerHTML = mensaje;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('titulo').textContent = 'Ejercicio 7: Menú de Opciones (SWITCH)';
    document.getElementById('instrucciones').textContent = 'Simula un menú de opciones CRUD. Selecciona una opción y haz clic en "Ejecutar".';
});