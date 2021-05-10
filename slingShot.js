class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.1
        }
    
        this.chain=Constraint.create(options);
        World.add(world, this.chain);

        this.img1=loadImage("sprites/sling1.png");
        this.img2=loadImage("sprites/sling2.png");
        this.img3=loadImage("sprites/sling3.png");

        this.pointB=pointB;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.img1,241,130);
        image(this.img2,214,88);
        pop();
        if(this.chain.bodyA){
     var pointA=this.chain.bodyA.position;
     var pointB=this.pointB;  
     push();
     strokeWeight(10);
     stroke(50,23,8);
     image(this.img3,pointA.x-25,pointA.y-10,36,30)
     line(pointA.x,pointA.y,pointB.x+25,pointB.y-6);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
        }

    }
    attach(body){
        this.chain.bodyA=body;
    }

    fly(){
        this.chain.bodyA=null;
    }
}
