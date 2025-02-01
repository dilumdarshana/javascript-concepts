## SOLID Principles

1. Single-responsibility
  A class should have one and only one reason to change, meaning that a class should have only one job    

2. Open-closed
  Objects or entities should be open for extension but closed for modification.

Wrong Way;

```
class Coder {
  constructor(fullName, language, hobby, education, workplace, position) {
    this.fullName = fullName;
    this.language = language;
    this.hobby = hobby;
    this.education = education;
    this.workplace = workplace;
    this.position = position;
  }
}

// problem here is when we introduce new property to the Coder class we have to modify the CoderFilter class also
class CoderFilter {
  filterByNae(coders, fullName) {
    return coders.filter(coder => coder.fullName === fullName)
  }

  filterByLanguage(coders, language) {
    return coders.filter(coder => coder.language === language)
  }
}
```
Correct Way:

```
// modify the filter class this way, can introduce any attributes to the Coder class
class CoderFilter {
  filterByAttribute(coders, attribute) {
    return coders.filter(corder => corder[attribute] === attribute)
  }
}
```

3. Liskov Substitution
  Every subclass or derived class should be substitutable for their base or parent class. Which means all the subclass methids should work exactly the way it work in parent class

Wrong Way:

```
Class Rectable {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }

  getArea() {
    return this._width * this._height;
  }
}

// wrong child class implementation
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

const square = new Square(2);
square.width = 3;

console.log(square.getArea()) // this will return 6 which is a wrong value. It should be 9
```

Correct Way:

```
// correct way of writing a child class
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = value;
    this._height = value;
  }

  set height(value) {
    this._height = value;
    this._width = value;
  }
}
```

4. Interface segregation

  A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use

  This principle not directly belongs to the Javascript. This can be applied for a Typescript

Wrong Way:

```
interface VehicleInterface {
  drive(): string;
  fly(): string
}

class SupperCar implements VehicleInterface {
  public drive(): string {
    return 'Driving...';
  }

  public fly(): string {
    return 'Flying...';
  }
}

class Car implements VehicleInterface {
  public drive(): string {
    return 'Driving...';
  }

  public fly(): string {
    return 'Not applicable...';
  }
}

class AirPlane implements VehicleInterface {
  public drive(): string {
    return 'Not applicable...';
  }

  public fly(): string {
    return 'Flying...';
  }
}

```

Correct Way:

```
interface CarInterface {
  drive(): string;
}

interface AirPlaneInterface {
  fly(): string
}

class SupperCar implements CarInterface, AirPlaneInterface {
  public drive(): string {
    return 'Driving...';
  }

  public fly(): string {
    return 'Flying...';
  }
}

class Car implements CarInterface {
  public drive(): string {
    return 'Driving...';
  }
}

class AirPlane implements AirPlaneInterface {
  public fly(): string {
    return 'Flying...';
  }
}
```

5. Dependency inversion
  High level modules should not be depends on low level modules

Wrong Way:

```
class FileSystem {
  writeToFile(data) {
    // logic to write in to File
  }
}

class Database {
  writeToDatabase(data) {
    // logic to write in to DB
  }
}

class LocalDatabase {
  writeToLocalStorage(data) {
    // logic to write in to local storage
  }
}

class SaveManager {
  saveData(type , data) {
    if (type instanceof FileSystem) {
      writeToFile(data);
    }

    if (type instanceof Database) {
      writeToDatabase(data);
    }

    if (type instanceof LocalDatabase) {
      writeToLocalStorage(data);
    }
  }
}
```

Correct Way:

```
class FileSystem {
  save(data) {
    // logic to write in to File
  }
}

class Database {
  save(data) {
    // logic to write in to DB
  }
}

class LocalDatabase {
  save(data) {
    // logic to write in to local storage
  }
}

class SaveManager {
  saveData(type , data) {
   type.save(data);
  }
}

```