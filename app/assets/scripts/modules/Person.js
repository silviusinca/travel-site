class Person{
    constructor(fullName, favColor){
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("Hi there! I am " + this.name + " and my favortie color is " + this.favoriteColor + ".");
    }
}

export default Person;