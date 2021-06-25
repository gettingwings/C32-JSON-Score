class SlingShot{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
          }
        
          this.sling = Constraint.create(options);
          World.add(world, this.sling);

          this.sling1 = loadImage("sprites/sling1.png");
          this.sling2 = loadImage("sprites/sling2.png");
          this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        image(this.sling1, 200,130);
        image(this.sling2, 175,85);
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;
        strokeWeight(6);
        stroke(255);
        //line(posA.x, posA.y, posB.x, posB.y);
        point(posB.x, posB.y);
        push();
        stroke(48,22,8);
        if(posA.x<220){
        strokeWeight(6);
        line(posA.x-25, posA.y, posB.x+30, posB.y+4)
        line(posA.x-25, posA.y, posB.x, posB.y)
        image(this.sling3, posA.x-25, posA.y, 15,30)
        }else{
        strokeWeight(3);
        line(posA.x+25, posA.y, posB.x+30, posB.y+4)
        line(posA.x+25, posA.y, posB.x, posB.y)
        image(this.sling3, posA.x+25, posA.y, 15,30)
        }
        pop();
        }
    }
}