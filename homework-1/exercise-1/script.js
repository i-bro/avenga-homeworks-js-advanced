const database = [];

function createStudent(firstName, lastName, age, email) {
    return {
        firstName,
        lastName,
        age,
        email,
        fullName: `${firstName} ${lastName}`
    };
}


const form = document.getElementById('studentForm');
const listDisplay = document.getElementById('studentList');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    
    const newStudent = createStudent(fName, lName, age, email);

    
    database.push(newStudent);

    updateDisplay();

    form.reset();
});


function updateDisplay() {
    listDisplay.innerHTML = "";

    database.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.fullName} (Age: ${student.age}) - ${student.email}`;
        listDisplay.appendChild(li);
    });
}