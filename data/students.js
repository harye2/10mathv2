const STUDENTS = [
    "Sebastian Arroyave", "Daniel Barragan", "Santiago Cachaya", "Estiven Chaves", "Valerie Choles",
    "Sofia Correa", "Mariana Diaz", "Felipe Dominguez", "Luciana Gomez", "Santhiago Gonzalez",
    "Maria Grisales", "Sara Herrera", "Andres Ibarguen", "Jhosman Lopez", "Tomas Lopez",
    "Saray Loza", "Esteban Manjarrez", "Miguel Menco", "Samuel Mercado", "Alejandro Montes",
    "Santiago Pineda", "Emiliano Quiroz", "Laurenth Romero", "Alexis Ruiz", "Maria Ruiz",
    "Junior Salgado", "Tomas Salgado", "Samuel Sanchez", "Maria Solano", "Luis Solar",
    "Maily Vahos", "Neyder Vahos", "Maria Velasquez", "Juan Villadiego", "Juan Zabala"
];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
