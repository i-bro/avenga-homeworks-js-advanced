const reminders = [];


const addBtn = document.getElementById('addBtn');
const showBtn = document.getElementById('showBtn');
const tableBody = document.getElementById('tableBody');
const reminderTable = document.getElementById('reminderTable');


function createReminder(title, priority, color, description) {
    return {
        title: title,
        priority: priority,
        color: color,
        description: description,
    };
}


addBtn.addEventListener('click', () => {
    const titleVal = document.getElementById('title').value;
    const priorityVal = document.getElementById('priority').value;
    const colorVal = document.getElementById('color').value;
    const descVal = document.getElementById('description').value;

    if (!titleVal) return alert("Please enter a title!");

    
    const newReminder = createReminder(titleVal, priorityVal, colorVal, descVal);
    reminders.push(newReminder);


    document.getElementById('title').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('description').value = '';
    
    alert("Reminder saved!");
});


showBtn.addEventListener('click', () => {
   
    tableBody.innerHTML = "";

    if (reminders.length === 0) {
        alert("No reminders found.");
        return;
    }

    reminderTable.style.display = "table";

    
    reminders.forEach(item => {
        const row = document.createElement('tr');

        
        const titleCell = document.createElement('td');
        const priorityCell = document.createElement('td');
        const descCell = document.createElement('td');

    
        titleCell.textContent = item.title;
        titleCell.style.color = item.color;
        titleCell.style.fontWeight = "bold";

        priorityCell.textContent = item.priority;
        descCell.textContent = item.description;

        
        row.appendChild(titleCell);
        row.appendChild(priorityCell);
        row.appendChild(descCell);

        tableBody.appendChild(row);
    });
});