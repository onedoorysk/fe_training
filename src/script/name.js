class Name {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.lastName} ${this.firstName}`;
    }
}
