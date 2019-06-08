interface Vehicle {
    move(): boolean
}

abstract class Factory {
    public abstract create(): Vehicle;
}

class VolkwagenFactory extends Factory {
    create (): Vehicle {
        return new VolkswagenVehicle();
    }
}

class VolkswagenVehicle implements Vehicle {
    public move () {
        return true;
    }
}

const vehicle1 = new VolkwagenFactory().create();
console.log(vehicle1.move())

