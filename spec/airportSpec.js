describe("airport", function() {
  let airport;
  let plane

  beforeEach(function(){
    airport = new Airport
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff'])
  })

  describe("#land", function(){
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

})