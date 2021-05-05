describe("airport", function() {
  let airport;
  let plane
  let weather

  beforeEach(function(){
    airport = new Airport
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff'])
    weather = jasmine.createSpy('weather', 'isStormy')
  })

  describe("#land", function(){
    beforeEach (function(){
      spyOn(airport.weather, "isStormy").and.returnValue(false)
    })
    it('tells the plane to land', function(){
      airport.land(plane)
      expect(plane.land).toHaveBeenCalled()
    })

    it("Tests if plane goes into hanger after landing", function(){
      expect(airport.hanger).toHaveSize(0)
      airport.land(plane)
      expect(airport.hanger).toHaveSize(1)
    })
  })

  describe("#takeoff", function(){
    beforeEach (function(){
      spyOn(airport.weather, "isStormy").and.returnValue(false)
    })
    it('tells the plane to takeoff', function(){
      airport.takeoff(plane)
      expect(plane.takeoff).toHaveBeenCalled()
    })

    it("Tests if plane goes into hanger after landing", function(){
      expect(airport.hanger).toHaveSize(0)
      airport.land(plane)
      expect(airport.hanger).toHaveSize(1)
    })
  })

  describe("#capacity", function(){
    beforeEach (function(){
      spyOn(airport.weather, "isStormy").and.returnValue(false)
    })
    it("default capacity is 20", function(){
      expect(airport.capacity).toEqual(20)
    })

    it("receives error if airport is full", function(){
      for (i=0; i < 20; i++) {
        airport.land(plane)
      }
      expect(function() { airport.land(plane) }).toThrowError(Error, 'Airport full')
    })
  })

  describe("#weather", function(){
    beforeEach (function(){
      spyOn(airport.weather, "isStormy").and.returnValue(true)
    })
    it("receives error landing if weather is stormy", function(){
      expect(function() { airport.land(plane) }).toThrowError(Error, 'weather is too stormy to land')
    })
    it("receives error taking off if weather is stormy", function(){
      expect(function() { airport.takeoff(plane) }).toThrowError(Error, 'weather is too stormy to takeoff')
    })
  })
})