function filterPassedStudents(students) {
    return students.filter(student => student.score >= 60);
  }
  
  
  const students = [
    { name: 'Alice', score: 75 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 40 }
  ];
  
  const passedStudents = filterPassedStudents(students);
  console.log(passedStudents); // Output: [{ name: 'Alice', score: 75 }, { name: 'Charlie', score: 80 }]
  