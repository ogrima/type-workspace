var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function Hello(pessoa) {
    return "Bom dia, " + pessoa.firstName + " " + pessoa.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = Hello(user);
