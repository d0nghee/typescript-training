var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function visitor(person) {
    return "hi, " + person.firstName + " " + person.lastName;
}
var user = new Student("Han", "D. ", "Hee");
document.body.textContent = visitor(user);
