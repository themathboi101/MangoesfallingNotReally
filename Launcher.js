class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
       

        this.bodyA=bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        image(this.launcher,200,20);
        
        if(this.launcher.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.launcher,pointA.x -30, pointA.y -10,15,30);
        } 
            
    }
   attach(body) {
   this.launcher.bodyA=body
   }
}
