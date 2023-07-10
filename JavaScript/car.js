"use strict";
const car = {
    type: 'Mitsibishi',
    model: 'Lancer Evolution',
    year: 2005
};
console.log(car); // { type: 'Mitsibishi', model: 'Lancer Evolution', year: 2005 }
var carAccelerate;
(function (carAccelerate) {
    carAccelerate[carAccelerate["forward"] = 1] = "forward";
    carAccelerate[carAccelerate["left"] = 2] = "left";
    carAccelerate[carAccelerate["right"] = 3] = "right";
    carAccelerate[carAccelerate["reverse"] = 4] = "reverse";
})(carAccelerate || (carAccelerate = {}));
console.log(carAccelerate.forward); //1
console.log(carAccelerate.left); //2
console.log(carAccelerate.right); //3
console.log(carAccelerate.reverse); //4
var carErrorCodes;
(function (carErrorCodes) {
    carErrorCodes[carErrorCodes["checkEngineLight"] = 101] = "checkEngineLight";
    carErrorCodes[carErrorCodes["checkBatteryLight"] = 202] = "checkBatteryLight";
})(carErrorCodes || (carErrorCodes = {}));
console.log(carErrorCodes.checkBatteryLight); //101
console.log(carErrorCodes.checkEngineLight); //202
var carErrorCodeNames;
(function (carErrorCodeNames) {
    carErrorCodeNames["oneZeroOne"] = "Check Engine Light";
    carErrorCodeNames["twoZeroTwo"] = "Check Battery Light";
})(carErrorCodeNames || (carErrorCodeNames = {}));
console.log(carErrorCodeNames.oneZeroOne);
console.log(carErrorCodeNames.twoZeroTwo);
const newCar = {
    make: 'Mitsibishi',
    model: 'Lancer Evolution',
    year: 2005,
    engine: '4G63'
};
console.log(newCar);
const createACar = (make, model, year, 
/* ? means optional parameter */ engine, user = /* default parameter */ "user") => {
    const creatingCar = {
        make: make,
        model: model,
        year: year,
        engine: engine
    };
};
createACar("Mitsibishi", "Lancer Evolution", 2005);
