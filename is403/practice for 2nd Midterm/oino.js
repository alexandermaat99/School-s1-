// created a brand new student object when the page is loaded
var oStudent;

// created a class called person with two attributes (firstName and lastName)
class person {
  firstName;
  lastName;
}

// student inherrits the firstName and lastName from person, but also adds gpa and an attribute called grades which is a courseGrades object
// which means it will have courseNum and letterGrade

class student extends person {
  gpa;
  grades = new courseGrades();
}

class courseGrades {
  courseNum;
  letterGrade;
}

// example Alex Maat 3.5 {courseNum: "100", letterGrade:"A"}
// o.Student.grades.letterGrade returns "A"
// o.Student.grades.courseNum returns "100"

function addStudent() {
  // need to create the object, use "new"
  oStudent = new student();
  oStudent.firstName = document.getElementById("first").value;
  oStudent.lastName = document.getElementById("last").value;
  //dont forget to parseFloat becasue it's a gpa
  oStudent.gpa = parseFloat(document.getElementById("gpa").value);

  document.getElementById("courseNum").focus();
}

function addCourse() {
  // need to create the object, use "new"
  oStudent.grades.courseNum = document.getElementById("courseNum").value;
  oStudent.grades.letterGrade = document.getElementById("courseGrade").value;
}

function displayStudents() {
  let sOutput = "";

  sOutput += oStudent.lastName + ", " + oStudent.firstName + "<br>";
  sOutput +=
    "Grade for course " +
    oStudent.grades.courseNum +
    " was a(n)" +
    oStudent.grades.letterGrade +
    "<br>";
  sOutput += "<br><br>";
  document.getElementById("output").innerHTML = sOutput;
}
