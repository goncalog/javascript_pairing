describe('Thermostat', function() {
    let thermostat;

    beforeEach( function(){
        thermostat = new Thermostat();
    });

    describe('.temperature property', function() {
      it("starts at 20 deg", function(){
        expect(thermostat.temperature).toEqual(20);
      });

      it("does not go below 10 deg", function(){
        for (let i = 0; i < 15; i +=1) {
            thermostat.down();
        }
        expect(thermostat.temperature).toEqual(10);
      });
    });

    describe('.up function', function() {
      it("increases temp by 1 deg", function(){
          thermostat.up();
          expect(thermostat.temperature).toEqual(21);
      });
    });

    describe('.down function', function() {
      it("decreases temp by 1 deg", function(){
          thermostat.down();
          expect(thermostat.temperature).toEqual(19);
      });
    });

    describe('power saving mode', function() {
      it('has power saving mode on by default', function() {
        expect(thermostat.powerSavingMode).toBe(true);
      });

      it('can be turned off', function() {
        thermostat.turnPowerSavingOff();
        expect(thermostat.powerSavingMode).toBe(false);
      });

      it("maximum temperature is 25 deg if power saving is on", function() {
        thermostat.turnPowerSavingOn();
        for (let i = 0; i < 10; i +=1) {
          thermostat.up();
        }
        expect(thermostat.temperature).toEqual(25);
      });
  
      it("maximum temperature is 32 deg if power saving is off", function() {
        thermostat.turnPowerSavingOff();
        for (let i = 0; i < 15; i +=1) {
          thermostat.up();
        }
        expect(thermostat.temperature).toEqual(32);
      });
    });

    describe('.reset function', function() {
      it('resets the temperature to 20 deg', function() {
        for (let i = 0; i < 5; i +=1) {
          thermostat.down();
        }
        thermostat.reset();
        expect(thermostat.temperature).toEqual(20);
      });
    });

    describe('.currentEnergyUsage function', function() {
      it('returns `low` when temperature is below 18', function() {
        for (let i = 0; i < 5; i +=1) {
          thermostat.down();
        }
        expect(thermostat.currentEnergyUsage()).toEqual('low');
      });

      it('returns `medium` when temperature is between 18 and 25', function() {
        expect(thermostat.currentEnergyUsage()).toEqual('medium');
        for (let i = 0; i < 5; i +=1) {
          thermostat.up();
        }
        expect(thermostat.currentEnergyUsage()).toEqual('medium');
      });

      it('returns `high` when temperature is above 25', function() {
        thermostat.turnPowerSavingOff();
        for (let i = 0; i < 6; i +=1) {
          thermostat.up();
        }
        expect(thermostat.currentEnergyUsage()).toEqual('high');
      });
    });
});
