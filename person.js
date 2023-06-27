// export const person = {
//     name: "John Doe",
//     age: 30
// }

// ES6 Classes
export class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    greeting() {
        console.log(`My Name is ${this.name} , I'm ${this.age}`)
    }

}