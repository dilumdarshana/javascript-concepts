class Coffee {
  getCost () {
    return 2;
  }

  getDescription() {
    return 'Regular Coffee';
  }
}

class CoffeeDecorator {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

class MilkDecoratory extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 0.5;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ' with milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 1;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ' with sugar';
  }
}

let coffee = new Coffee();
console.log(coffee.getDescription());
console.log(coffee.getCost());

coffee = new MilkDecoratory(coffee);
console.log(coffee.getDescription());
console.log(coffee.getCost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription());
console.log(coffee.getCost());
