
var student = {
    Name: "",
    Age: 0,
    Grade: "",
    
    
    displayInfo: function() {
      console.log("Name: " + this.Name);
      console.log("Age: " + this.Age);
      console.log("Grade: " + this.Grade);
    }
  };
  

  student.Name = prompt("Enter the student's name:");
  student.Age = parseInt(prompt("Enter the student's age:"));
  student.Grade = prompt("Enter the student's grade:");
  
  
  student.displayInfo();
  