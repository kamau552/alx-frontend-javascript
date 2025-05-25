/// <reference path="./Teacher.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./java.ts" />
/// <reference path="./React.ts" />

namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
  };
}

// Cpp
console.log("C++");
Subjects.cpp.setTeacher(Subjects.cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// Java
console.log("Java");
Subjects.java.setTeacher(Subjects.cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// React
console.log("React");
Subjects.react.setTeacher(Subjects.cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());

export { Subjects };
