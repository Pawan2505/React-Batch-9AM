let students = [
  { name: "Pawan", score: 60 },
  { name: "Anna", score: 45 },
];
let passedStudents = students.filter((student) => student.score > 50);
console.log(passedStudents); 