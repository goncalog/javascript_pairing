describe('Airport', function() {
  let airport;
  let plane;

    beforeEach( function(){
      airport = new Airport();
      plane = new Plane();
      // plane = jasmine.createSpy('plane');
    })

    // As an air traffic controller 
    // So I can get passengers to a destination 
    // I want to instruct a plane to land at an airport
    it("can instruct a plane to land", function(){  
      airport.land(plane);
      expect(airport.planes).toContain(plane);
      expect(plane.isDeparted).toEqual(false);
    });

    // As an air traffic controller 
    // So I can get passengers on the way to their destination 
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    it('can instruct a plane to take off', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).not.toContain(plane);
      expect(plane.isDeparted).toBe(true);
    });

})