class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}


const students = [
    new Student("S1", 10),
    new Student("S2", 15),
    new Student("S3", 20),
    new Student("S4", 25),
    new Student("S5", 30)
];


const filtered = students.filter(student => student.age < 20);


console.log(filtered);
