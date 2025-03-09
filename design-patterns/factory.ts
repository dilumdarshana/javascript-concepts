interface Vehicle {
  make: string;
  model: string;
  type: string;
  getInfo(): string;
}

interface CarOptions {
  make: string;
  model: string;
}

interface TruckOptions {
  make: string;
  model: string;
  payload: number;
}

interface MotorCycleOptions {
  make: string;
  model: string;
  engineCapacity: number;
}

type VehicleOptions = CarOptions | TruckOptions | MotorCycleOptions;

class Car implements Vehicle {
  make: string;
  model: string;
  type: string = 'Car';

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
  
  getInfo(): string {
    return `${this.make} ${this.model} (${this.type})`;
  }
}

class Truck implements Vehicle {
  make: string;
  model: string;
  type: string = 'Truck';
  payload: number;

  constructor(make: string, model: string, payload: number) {
    this.make = make;
    this.model = model;
    this.payload = payload;
  }

  getInfo(): string {
    return `${this.make} ${this.model} (${this.type}) with payload ${this.payload} tons`;
  }
}

class MotorCycle implements Vehicle {
  make: string;
  model: string;
  type: string = 'Motorcycle';
  engineCapacity: number;

  constructor(name: string, model: string, engineCapacity: number) {
    this.make = name;
    this.model = model;
    this.engineCapacity = engineCapacity;
  }

  getInfo(): string {
    return `${this.make} ${this.model} (${this.type}) with engine capacity ${this.engineCapacity}`; 
  }
}

class VehicleFactory {
  createVehicle(type: 'car', options: CarOptions): Car;
  createVehicle(type: 'truck', options: TruckOptions): Truck;
  createVehicle(type: 'motorcycle', options: MotorCycleOptions): MotorCycle;
  createVehicle(type: string, options: VehicleOptions): Vehicle {
    switch (type) {
      case 'car':
        return new Car(options.make, options.model);
      case 'truck':
        return new Truck(options.make, options.model, (options as TruckOptions).payload);
      case 'motorcycle':
        return new MotorCycle(options.make, options.model, (options as MotorCycleOptions).engineCapacity);
      default:
        throw new Error(`Unsupported vehicle type: ${type}`);
    }
  }
}

const factory = new VehicleFactory();
const car = factory.createVehicle('car', {
  make: 'Toyota',
  model: 'Camry'
});

const truck = factory.createVehicle('truck', {
  make: 'Ford',
  model: 'F-150',
  payload: 2000
});

const motorcycle = factory.createVehicle('motorcycle', {
  make: 'Honda',
  model: 'CBR',
  engineCapacity: 1000
});

console.log(car.getInfo());
console.log(truck.getInfo());
console.log(motorcycle.getInfo());
