describe("Plane", function() {
  var plane;

beforeEach(function(){
    plane = new Plane();
});

describe("Constructor", function(){

it("expects a plane to be flying", function(){
    expect(plane.isFlying).toEqual(true);
});
});

describe("Land", function(){

it("calling land sets flying variable to false", function() {
  plane.land()
  expect(plane.isFlying).toEqual(false)
});
});

describe("Takeoff", function(){

it("calling takeoff sets flying variable to true", function() {
    plane.takeoff()
    expect(plane.isFlying).toEqual(true)
  });
});
});