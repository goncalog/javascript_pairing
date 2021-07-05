describe('Thermostat', function() {
    let thermostat;

    beforeEach( function(){
        thermostat = new Thermostat();
    })

    it("starts at 20 deg", function(){
        expect(thermostat.temperature).toEqual(20)
    })
    it("up() increases temp by 1 deg", function(){
        thermostat.up()
        expect(thermostat.temperature).toEqual(21)
    })
    it("down() decreases temp by 1 deg", function(){
        thermostat.down()
        expect(thermostat.temperature).toEqual(19)
    })
    it("does not go below 10 deg", function(){
        for (let i = 0; i < 15; i +=1) {
            thermostat.down()
        }
        expect(thermostat.temperature).toEqual(10)
    })
} )