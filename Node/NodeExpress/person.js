class Person {
    constructor(name){
        this.name = name;
    }
    sayMyName(){
        return `Hellooooo, my name is: ${this.name}!`;
    }
}

module.exports = {
    Person,
}