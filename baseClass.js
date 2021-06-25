class BaseClass{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        };
        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("/sprites/base.png");  // placeholder

        World.add(world, this.body);

        //Apply angle to this body
        //Matter.Body.setAngle(this.body, angle);
        //This will be added to the Log class
        
       
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
        pop();
    }
}