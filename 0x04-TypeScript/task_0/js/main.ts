interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student {
    firstName: "Mohamed",
    LastName: "Chatr",
    age: 23,
    location: "Casablanca",
};

const student2: Student {
    firstName: "Ayoub",
    LastName: "Khalloufi",
    age: 24,
    location: "Casablanca",
};

const studentsList: Student[] = [student1, student2];

const renderTable: HTMLTableElement = document.createElement('table');
studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);
