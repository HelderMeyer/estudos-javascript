class Person {
    static fingers = 10
    age = 0
    constructor(name) {
        this.name = name
    }
    static say() {
        console.log(`Olá, tudo bem?`)
        console.log(`Eu tenho ${Person.fingers} dedos!`)
    }
}
Person.say()