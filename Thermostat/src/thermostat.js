class Thermostat {
    constructor() {
      this.temperature = 20;
      this.powerSavingMode = true;
      this.MIN_TEMP = 10;
      this.POWER_SAVING_ON_MAX_TEMP = 25;
      this.POWER_SAVING_OFF_MAX_TEMP = 32;
    }

    up() {
      if (!this._isMaxTemperature()) {
        this.temperature += 1;
      }
    }

    down() {
      if (!this._isMinTemperature()) {
          this.temperature -= 1;
      }
    }

    turnPowerSavingOn() {
      this.powerSavingMode = true;
    }

    turnPowerSavingOff() {
      this.powerSavingMode = false;
    }

    reset() {
      this.temperature = 20;
    }

    currentEnergyUsage() {
      if (this.temperature < 18) {
        return 'low';
      } else if (this.temperature <= 25) {
        return 'medium';
      } else {
        return 'high';
      }
    }

    _isMaxTemperature() {
      if (this.powerSavingMode) {
        return this.temperature === this.POWER_SAVING_ON_MAX_TEMP;
      } else {
        return this.temperature === this.POWER_SAVING_OFF_MAX_TEMP;
      }
    }

    _isMinTemperature() {
      return this.temperature === this.MIN_TEMP;
    }
}
