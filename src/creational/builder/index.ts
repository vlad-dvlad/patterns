interface Builder {
    reset()
    setSeats(count: number);
    setEngine(engine: string)
    setTripComputer(computer: string);
    setGPS(gps: string)
}

class CarBuilder implements Builder {
    reset() {
        console.log('Car builder reset')
    }
    setSeats(count: number) {
        console.log(`Count of seats: ${count}`)
    }
    setEngine(engine: string) {
        console.log(`Engine is: ${engine}`)
    }
    setTripComputer(computer: string) {
        console.log(`TripComputer is: ${computer}`)
    }
    setGPS(gps: string) {
        console.log(`Gps is: ${gps}`)
    }

    getResult() {
        return this
    }
}

class CarManualBuilder implements Builder {
    reset() {
        console.log('Manual Car builder reset')
    }
    setSeats(count: number) {
        console.log(`Count of seats (manual): ${count}`)
    }
    setEngine(engine: string) {
        console.log(`Engine is (manual): ${engine}`)
    }
    setTripComputer(computer: string) {
        console.log(`TripComputer is (manual): ${computer}`)
    }
    setGPS(gps: string) {
        console.log(`Gps is (manual): ${gps}`)
    }
    getResult() {
        return this
    }
}

class Director { 
    constructCarBuilder(builder: Builder) {
        builder.reset()
        builder.setSeats(2)
        builder.setEngine('Sport Engine')
        builder.setGPS('Sport gps');
        builder.setTripComputer('Sport trip computer')
    }
}
const carBuilder = new CarBuilder();
const director = new Director();
director.constructCarBuilder(carBuilder);

console.log('\nAnother builder\n')

const carManualBuilder = new CarManualBuilder();

director.constructCarBuilder(carManualBuilder)
