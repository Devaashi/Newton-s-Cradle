class Chain{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA= pointA
        this.Slingshot = Matter.Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    display(){
        var pointA = this.pointA;
        var pointB = this.Slingshot.bodyB.position;
        stroke("black")
        //strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}