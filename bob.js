class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("purple")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        circle(0, 0, this.radius);
        pop();
      }
}