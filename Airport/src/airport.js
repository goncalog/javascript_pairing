class Airport {
  constructor() {
    this.planes = [];
  }

  land(plane) {
    this.planes.push(plane);
    plane.arrive();
  }

  takeoff(plane) {
    this.planes = this.planes.filter(item => item !== plane);
    plane.depart();
  }
}
