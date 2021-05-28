class Mango {
  constructor() {
    var options = {
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2,
    }
    var yeet=this.x;
    var bruh=this.y;
    var radius=this.r;
    this.body = Bodies.circles(yeet,bruh,radius,options);
    
    this.image=loadImage("Plucking Mangoes/mango.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var diamter=this.r*2;

  push();
   
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("green");
  rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,diamter,diameter);
    pop()
  }
}
