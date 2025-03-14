// Derived classes should be substitutable for their base classes
// Example: Different button components should be interchangeable where a Button type is expected

// Bad way
class Bird {
  fly(altitude: number): void {
    console.log(`Flying at ${altitude} meters`)
  }
}

class Eagle extends Bird {
  fly(altitude: number): void {
    console.log(`Flying at ${altitude} meters`);
  }
}

class Penguin extends Bird {
  // violating Leskov
  fly(altitude: number): void {
    throw new Error('Penguin can not fly')
  }
}


