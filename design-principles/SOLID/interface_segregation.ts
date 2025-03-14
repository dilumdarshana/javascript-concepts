// Create specific interface rather than creating generic interface
// A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use

// This principle not directly belongs to the Javascript. This can be applied for a Typescript

// Bad way. All the worker sub types does need bellow all methods?
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Robot implements Worker {
  work() {
    console.log('Robot working');
  }

  // useless implementation
  eat() {
    console.log('Robot do not eating');
  }

  // useless implementation
  sleep() {
    console.log('Robot do not sleeping');
  }
}

// Correct way
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

// Robot with only what is needed
class MyRobot implements Workable {
  work() {
    console.log('Robot working');
  }
}

// Human withonly what is needed
class Human implements Workable, Eatable, Sleepable {
  work() {
    console.log('Human working');
  }

  eat() {
    console.log('Human eating');
  }

  sleep() {
    console.log('Human sleeping');
  }
}
