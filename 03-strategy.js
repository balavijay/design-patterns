/*
Strategy design pattern
The Strategy pattern is a behavioural design pattern that enables you to define a group 
(or family) of closely-related algorithms (known as strategies). 
The strategy pattern allows you to swap strategies in and out for each other as needed at runtime.
*/

function Fedex() {
    this.calculate = package => { 
        return (package.weight * 1.5).toFixed(2);
    }
}

function DTDC() {
    this.calculate = package => {
        return (package.weight * 2.5).toFixed(2);
    }
}

function Amargo(){
    this.calculate = package => {
        return (package.weight * 0.5).toFixed(2);
    }
}

function Shipping() {
    this.company="";

    this.setStrategy = company => {
        this.company = company;
    }

    this.calculate = package => {
        return this.company.calculate(package);
    }
}

const fedex = new Fedex();
const dtdc = new DTDC();
const amargo = new Amargo();

const package = {"shipTo" : "Bangalore", "weight" : 1.2};

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log("Fedex ", shipping.calculate(package));

shipping.setStrategy(dtdc);
console.log("DTDC ", shipping.calculate(package));

shipping.setStrategy(amargo);
console.log("Amargo ", shipping.calculate(package));