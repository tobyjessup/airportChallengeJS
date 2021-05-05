class Plane {
    constructor(flying = true) {
        this.isFlying = flying
    }

    land(){
        this.isFlying = false
    }

    takeoff(){
        this.isFlying = true
    }
}