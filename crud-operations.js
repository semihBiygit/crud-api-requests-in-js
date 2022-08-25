const instructorList = [];
const studentList = [];
const allCourses = ["JavaScript", "HTML", "CSS", "NodeJS", "ReactJS"];
const courses = [];

const createInstructorObject = (
  firstName,
  lastName,
  courses = [],
  isActive = true
) => {
  const instructor = {};
  try {
    if (firstName === "" || lastName === "") {
      throw "First name and last name is required";
    }
    if (!Array.isArray(courses) && !(courses.length > 0)) {
      throw "Courses must be an array";
    } else {
      instructor.firstName = firstName;
      instructor.lastName = lastName;
      instructor.courses = courses;
      instructor.isActive = isActive;
      instructor.createdAt = new Date();
    }
    let isInstructorExist = false;

    instructorList.forEach((instructor) => {
      if (
        instructor.firstName === firstName &&
        instructor.lastName === lastName
      ) {
        console.log("Instructor already exist");
        isInstructorExist = true;
        return;
      }
    });
    if (isInstructorExist === false) {
      instructorList.push(instructor);
    }
  } catch (error) {
    console.error(error);
  }
};

const createStudentObject = (
  firstName,
  lastName,
  courses = [],
  instructorList,
  score,
  isActive = true
) => {
  const student = {};
  try {
    if (firstName === "" || lastName === "") {
      throw "First name and last name is required";
    }
    if (!Array.isArray(courses) && !(courses.length > 0)) {
      throw "Courses must be an array";
    }
    if (Array.isArray(instructorList) && instructorList.length > 0) {
      throw "InstructorList must be an array";
    }
    if (typeof score !== "number") {
      throw "Score must be a number";
    } else {
      student.firstName = firstName;
      student.lastName = lastName;
      student.courses = courses;
      student.instructorList = instructorList;
      student.score = score;
      student.createdAt = new Date();
      student.isActive = isActive;
    }
    let isStudentExist = false;
    studentList.forEach((student) => {
      if (student.firstName === firstName && student.lastName === lastName) {
        isStudentExist = true;
        throw "Student already exist";
      }
    });
    if (isStudentExist === false) {
      studentList.push(student);
    }
  } catch (error) {
    console.log(error);
  }
};

createInstructorObject("Orkun", "Durmaz", allCourses);
createInstructorObject("Gözde", "Saygili", allCourses[1] + "," + allCourses[3]);
console.log("Student List = ",studentList);
createStudentObject(
  "Semih",
  "Biygit",
  ["CSS", "JavaScript"],
  instructorList[0],
  95
);
// createStudentObject("Semih", "Biygit", ["CSS"]["JavaScript"], instructorList[0], 95);
// console.log(studentList);
console.log("Instructor List = ",instructorList);
