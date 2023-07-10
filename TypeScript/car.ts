const firstCar: {type: string, model: string, year: number} = {
    type: 'Mitsibishi', 
    model: 'Lancer Evolution',
    year: 2005
};
console.log(firstCar); // { type: 'Mitsibishi', model: 'Lancer Evolution', year: 2005 }


enum carAccelerate {
    forward = 1,
    left,
    right,
    reverse
}
console.log(carAccelerate.forward); //1
console.log(carAccelerate.left); //2
console.log(carAccelerate.right); //3
console.log(carAccelerate.reverse); //4

enum carErrorCodes {
    checkEngineLight = 101,
    checkBatteryLight = 202
}
console.log(carErrorCodes.checkBatteryLight); //101
console.log(carErrorCodes.checkEngineLight); //202

enum carErrorCodeNames {
    oneZeroOne = "Check Engine Light",
    twoZeroTwo = "Check Battery Light"
}
console.log(carErrorCodeNames.oneZeroOne);
console.log(carErrorCodeNames.twoZeroTwo);

interface TypeOfCar extends CarComponents {
    make: string,
    model: string,
    year: number | string
}

interface CarComponents {
    engine?: string
}

const newCar: TypeOfCar = {
    make: 'Mitsibishi', 
    model: 'Lancer Evolution',
    year: 2005,
    engine: '4G63'
}
console.log(newCar);

const createACar = (
        make: string, 
        model: string, 
        year: string | number, 
        /* ? means optional parameter */ engine?: string,
        user: /* default parameter */ string = "user"
    ): void | TypeOfCar => {
    const creatingCar: TypeOfCar = {
        make: make, 
        model: model,
        year: year,
        engine: engine
    }
}

createACar("Mitsibishi", "Lancer Evolution", 2005);

class Car {
    make: string;
    model: string;
    year: string | number;
    engine: string;

    public constructor (make: string, model: string, year: string | number,engine: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

}
