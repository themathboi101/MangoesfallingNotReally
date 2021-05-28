class Stone {
    constructor() {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2,
      }
      this.x=x;
      this.y=y;
      this.radius=r;
      this.body = Bodies.circles(this.x,this.y,this.radius,options);
      
      this.image=loadImage("Plucking Mangoes/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var diameter=this.r*2;

    push();
      
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("green");

      imageMode(CENTER);
      image(this.image,0,0, diameter,diameter);
      pop()
    }
  }
