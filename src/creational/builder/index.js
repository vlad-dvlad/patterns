var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.reset = function () {
        console.log('Car builder reset');
    };
    CarBuilder.prototype.setSeats = function (count) {
        console.log("Count of seats: ".concat(count));
    };
    CarBuilder.prototype.setEngine = function (engine) {
        console.log("Engine is: ".concat(engine));
    };
    CarBuilder.prototype.setTripComputer = function (computer) {
        console.log("TripComputer is: ".concat(computer));
    };
    CarBuilder.prototype.setGPS = function (gps) {
        console.log("Gps is: ".concat(gps));
    };
    return CarBuilder;
}());
var CarManualBuilder = /** @class */ (function () {
    function CarManualBuilder() {
    }
    CarManualBuilder.prototype.reset = function () {
        console.log('Manual Car builder reset');
    };
    CarManualBuilder.prototype.setSeats = function (count) {
        console.log("Count of seats (manual): ".concat(count));
    };
    CarManualBuilder.prototype.setEngine = function (engine) {
        console.log("Engine is (manual): ".concat(engine));
    };
    CarManualBuilder.prototype.setTripComputer = function (computer) {
        console.log("TripComputer is (manual): ".concat(computer));
    };
    CarManualBuilder.prototype.setGPS = function (gps) {
        console.log("Gps is (manual): ".concat(gps));
    };
    return CarManualBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.constructCarBuilder = function (builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine('Sport Engine');
        builder.setGPS('Sport gps');
        builder.setTripComputer('Sport trip computer');
    };
    return Director;
}());
var carBuilder = new CarBuilder();
var director = new Director();
director.constructCarBuilder(carBuilder);
console.log('\nAnother builder\n');
var carManualBuilder = new CarManualBuilder();
director.constructCarBuilder(carManualBuilder);
