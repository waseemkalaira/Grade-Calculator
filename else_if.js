function calculateGrade() {
    let num = document.getElementById("gradeinput").value;
    let grade;
  
    if (num >= 90 && num <= 100) {
        grade = "A";
    } else if (num >= 80 && num < 90) {
        grade = "B";
    } else if (num >= 60 && num < 80) {
        grade = "C";
    } else {
        grade = "F"; // Assuming you want to handle cases where the grade is below 60
    }
  
    document.getElementById("output").innerText = "Your grade is: " + grade;
  }
  function resetFields() {
    document.getElementById("gradeinput").value = '';
    document.getElementById("output").innerText = '';
}
  