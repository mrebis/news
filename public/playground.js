

class Car{
    constructor(){
        this.wheels = 4;
        this.type = 'hatchback'
    }
    
}

class Ford extends Car{
    constructor(){
        super()
        this.window = 4;
    }

}


const car = new Car();
const ford = new Ford();

console.log(ford.wheels)