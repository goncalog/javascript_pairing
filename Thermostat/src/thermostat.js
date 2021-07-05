class Thermostat {
    constructor() {
        this.temperature = 20
    }

    up() {
        this.temperature += 1
    }

    down() {
        if (this.temperature > 10) {
            this.temperature -= 1
        }
    }
}