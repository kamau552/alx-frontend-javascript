interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "Njeri",
    lastname: "Kamau",
    age: 20,
    location: "Nairobi"
};

const student2: Student = {
    firstname: "Alex",
    lastname: "William",
    age: 22,
    location: "Kilifi"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstname;

    const lastNameCell: HTMLTableCellElement = document.createElement("td");
    lastNameCell.textContent = student.lastname;

    const ageCell: HTMLTableCellElement = document.createElement("td");
    ageCell.textContent = student.age.toString();

    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(headerRow);
table.appendChild(tbody);