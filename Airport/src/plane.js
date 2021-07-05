class Plane {
  constructor() {
    this.isDeparted = false;
  }

  depart() {
    this.isDeparted = true;
  }

  arrive() {
    this.isDeparted = false;
  }
}