// This program find the common values between two arrays

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourse = student1Courses.filter(value => student2Courses.includes(value))

console.log("The common course is: " + commonCourse)
document.getElementById("solution").innerHTML += commonCourse;