interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties like `contract`
}

// Example usage
const teacher3: Teacher = {
  firstName: 'Alice',
  lastName: 'Adams',
  fullTimeEmployee: false,
  location: 'Kenya',
  contract: false,
};

console.log(teacher3);

// Directors 
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Alex',
  lastName: 'Wanji',
  location: 'Nairobi',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

//  printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Alex", "Wanji"));
console.log(printTeacher("Alice", "Adams"));


// Interface describing the constructor parameters
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods and properties
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass('Alice', 'Alex');
console.log(student.displayName());   
console.log(student.workOnHomework()); 
