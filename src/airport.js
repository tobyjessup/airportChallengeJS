class Airport {
  constructor(capacity = 20, weather = new Weather) {
    this.hanger = []
    this.capacity = capacity
    this.weather = weather
  }

  land(plane) {
    if(this.hanger.length >= this.capacity) {
      throw new Error('Airport full')
    }
    if(this.weather.isStormy() === true) {
        throw new Error('weather is too stormy to land')
    }
    plane.land()
    this.hanger.push(plane)
  }

  takeoff(plane){
    if(this.weather.isStormy() === true) {
        throw new Error('weather is too stormy to takeoff')
    }
    plane.takeoff()
    this.hanger.filter(function(value, index, arr){
      return value != plane
    })
  }
}

