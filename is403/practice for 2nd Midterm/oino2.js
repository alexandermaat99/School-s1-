//this one is different because you will have an array that can hold multiple students, and each one
// of those multiple students can have multiple grades
// object in object esentially creates a dictionary

// created a brand new student object when the page is loaded
var studentArray = [];

// created a class called person with two attributes (firstName and lastName)
class person {
  firstName;
  lastName;
}

// student inherrits the firstName and lastName from person, but also adds gpa and an attribute called grades which is a courseGrades object
// which means it will have courseNum and letterGrade

class student extends person {
  gpa;
  grades = [];
}

class courseGrades {
  courseNum;
  letterGrade;
}

// example Alex Maat 3.5 {courseNum: "100", letterGrade:"A"}
// o.Student.grades.letterGrade returns "A"
// o.Student.grades.courseNum returns "100"

function addStudent() {
  // create the oStudent variable since we changed the oStudent to studentArray

  // need to create the object, use "new"
  let oStudent = new student();
  oStudent.firstName = document.getElementById("first").value;
  oStudent.lastName = document.getElementById("last").value;
  //dont forget to parseFloat becasue it's a gpa
  oStudent.gpa = parseFloat(document.getElementById("gpa").value);

  //adding the student object to the array
  studentArray.push(oStudent);
  document.getElementById("courseNum").focus();
}

function addCourse() {
  let oCourseGrade = new courseGrades();
  oCourseGrade.courseNum = document.getElementById("courseNum").value;
  oCourseGrade.letterGrade = document.getElementById("courseGrade").value;
  // need to create the object, use "new"
  if (studentArray.length > 0) {
    //index to the last student object to be attach it
    studentArray[studentArray.length - 1].grades.push(oCourseGrade);
    // Alex Maat 3.5 grades:{{courseNum: 100, letterGrade: A}, {courseNum: 200, letterGrade: B}}
    // Gail Maat 3.5 grades:{{courseNum: 100, letterGrade: B}}
  } else {
    alert("please add a student first");
    document.getElementById("first").focus;
  }
}

function displayStudents() {
  let sOutput = "";
  let iStudentCount;
  let iCourseCount;

  for (
    iStudentCount = 0;
    iStudentCount < studentArray.length;
    iStudentCount++
  ) {
    sOutput +=
      studentArray[iStudentCount].lastName +
      ", " +
      studentArray[iStudentCount].firstName +
      "<br>";
    for (iCourseCount = 0; iCourseCount < studentArray.length; iCourseCount++) {
      sOutput =
        +studentArray[iStudentCount].grades[iCourseCount].courseNum +
        " was " +
        studentArray[iStudentCount].grades[iCourseCount].letterGrade +
        "<br>";
    }
    sOutput += "<br><br>";
    document.getElementById("output").innerHTML = sOutput;
  }
}
