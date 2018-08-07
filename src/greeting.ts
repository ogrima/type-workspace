class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Pessoa {
    firstName: string;
    lastName: string;
}

function Hello(pessoa : Pessoa) {
    return "Bom dia, " + pessoa.firstName + " " + pessoa.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = Hello(user);