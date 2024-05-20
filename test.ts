class Student {
    fullName : string;

    constructor(public firstName : string,
        public middleInitial: string,
        public lastName : string) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        
        }

}


interface Person {
    firstName : string;
    lastName : string;

}

function visitor(person : Person) {
    return "hi, " + person.firstName + " " + person.lastName;
}


var user = new Student("Han", "D. ", "Hee");

document.body.textContent = visitor(user);