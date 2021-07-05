class Thermostat {
    constructor() {
        this.temperature = 20
        this.powerSavingMode = false
    }

    up() {
      if (!this.isMaximumTemperature()) {
        this.temperature += 1;
      }
    }

    down() {
        if (this.temperature > 10) {
            this.temperature -= 1
        }
    }

    turnPowerSavingOn() {
      this.powerSavingMode = true;
    }

    isMaximumTemperature() {
      if (this.powerSavingMode) {
        return this.temperature === 25;
      } 
      return false
    }
}