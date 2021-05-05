class Airport {
  constructor(capacity = 20) {
    this.hanger = []
    this.capacity = capacity
  }

  land(plane) {
    if(this.hanger.length >= this.capacity) {
      throw new Error('Airport full')
    }
    plane.land()
    this.hanger.push(plane)
  }

  takeoff(plane){
    plane.takeoff()
    this.hanger.filter(function(value, index, arr){
      return value != plane
    })
  }


}

