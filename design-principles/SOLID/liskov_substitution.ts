// Derived classes should be substitutable for their base classes
// Example: Different button components should be interchangeable where a Button type is expected

// Bad way
class Birds {
  fly(altitude: number): void {
    console.log(`Flying at ${altitude} meters`)
  }
}

class Eagle extends Birds {
  fly(altitude: number): void {
    console.log(`Flying at ${altitude} meters`);
  }
}

class Penguin extends Birds {
  // violating Leskov
  fly(altitude: number): void {
    // throw new Error('Penguin can not fly')
    console.log('Penguin is not flying');
  }
}

const myBird = new Penguin();
myBird.fly(1000);

// Good way
interface Animal {
  move(): void;
}

interface CanFly {
  fly(altitude: number): void;
}

class Bird implements Animal {
  move(): void {
    console.log('I am moving');
  }
}

class FlyingBird extends Bird implements CanFly {
  move(): void {
    console.log('moving by flying');
  }

  fly(altitude: number): void {
    console.log(`Flying at ${altitude} meters`);
  }
}

class MyPenguin extends Bird {
  // adhering to Liskov
  move(): void {
    console.log('I am moving');
  }
}

const myPenguin = new MyPenguin();
myPenguin.move();
