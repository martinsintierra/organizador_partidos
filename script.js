document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const availability = button.classList.contains('active') ? 'Disponible' : 'No disponible';
        button.textContent = availability;
    });
});

document.getElementById('availability-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const selectedSlots = [];
    document.querySelectorAll('.toggle-button.active').forEach(button => {
        const day = button.getAttribute('data-day');
        const hour = button.getAttribute('data-hour');
        selectedSlots.push(`${day}-${hour}`);
    });

    // Mostrar horarios seleccionados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>${name}</strong> (${email}) ha seleccionado los siguientes horarios: ${selectedSlots.join(', ')}`;
});

document.getElementById('day-select').addEventListener('change', function() {
    var selectedDay = this.value;
    var hourRows = document.querySelectorAll('.hour-row');
    hourRows.forEach(function(row) {
        if (row.getAttribute('data-day') === selectedDay) {
            row.classList.add('active');
        } else {
            row.classList.remove('active');
        }
    });
});
