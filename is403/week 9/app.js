class Course {
  constructor(number, name) {
    this.courNum = number;
    this.courseDesc = name;
  }
}

//three attrubtres connected to Student class name
//use "new" then specifiy class name "Student"
//finds constructor method

class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
}

//extends uses inherritance
//use super to call contructor of parent class
//ordinal, calls in order
//call super first, then we make changes, or additions
class Student extends Person {
  constructor(id, fName, lName) {
    super(fName, lName);
    this.lastName = lName;
    this.courses = [];
  }
}

let listStudents = [];

function play() {
  let sId = document.getElementById("netid").value;
  let sFirst = document.getElementById("first").value;
  let sLast = document.getElementById("last").value;

  let oStudent = new Student(sId, sFirst, sLast);
  listStudents.push(oStudent);

  //reset fields and put cursor back at top with focus
  document.getElementById("netid").value = "";
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("netid").focus = "";
}

function addCourse() {
  if (listStudents.length > 0) {
    let sNum = document.getElementById("coursenum").value;
    let sName = document.getElementById("coursename").value;
    let oCourse = new Course(sNum, sName);

    listStudents = [listStudents.length - 1].courses.push(oCourse);
  }
}
//print all this info
function display() {
  let sOutput = "";
  for (let i = 0; i < listStudents.length; i++) {
    sOutput +=
      listStudents[i].firstName +
      " " +
      listStudents[i].lastName +
      " " +
      listStudents[i].courses +
      "<br>";
    for (let iCourse = 0; iCourse < listStudents[i].courses.length; iCourse++) {
      sOutput =
        sOutput +
        "<font color = 'blue'>" +
        listStudents[iCount].courses[iCourse].courseDesc +
        "</font>" +
        "<br>";
    }
  }
  document.getElementById("output").innerHTML = sOutput;
}
