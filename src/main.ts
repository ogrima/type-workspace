let myString: String = "Testando meu texto";
let myNumber: number = 1225;


/*teste*/
function log(msg: String){
    console.log(msg);
}


log(myString + " - " + myNumber.toString());
log("Foi!!!");

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);


