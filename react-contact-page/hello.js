class Person {
    constructor(name) {
        this.name = name;
        this.hp = Math.floor((Math.random()*1000))
        this.atk = Math.floor((Math.random()*10) + 200);
    }
}

// var Person = function (name) {
//     (this.name = name),
//     (this.hp = Math.floor(Math.random()*100)),
//     (this.atk = Math.floor((Math.random()*10) + 20));
// };

console.log(new Person("dan"));


