class Human {
    constructor(){
        this.lifeIndex = 10;
    }
    getLifeIndex(){
        return this.lifeIndex;
    }

    hurt(damage){
        this.lifeIndex = this.lifeIndex - damage;
        this.lifeIndex = this.lifeIndex < 0 ? 0 : this.lifeIndex;
    }

}

class Dog {
    constructor(damage){
        this.damage = damage;
    }
    bite(){
       return this.damage;
    }
}

let h1 = new Human();
let d1 = new Dog(2);
let damage = d1.bite();
if(damage){
    h1.hurt(damage)
}
console.log(h1.getLifeIndex());

