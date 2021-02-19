import { Component } from "@angular/core";

@Component({
    selector: "app-si",
    templateUrl: "./string-interpolation.component.html"
})
export class StringInterpolationComponent {
    fName = "Ram";
    lName: string = "Sharma";
    num1: number = 10;
    termsAndConditions: boolean = true;
    person1: Person = { Name: "Amit", Address: "Delhi" };
    person2: Person;

    constructor() {
        this.person2 = new Person();
        this.person2.Name = "Amol";
        this.person2.Address = "Pune";
    }
}

class Person {
    Name: string;
    Address: string;
}