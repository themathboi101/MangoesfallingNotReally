class Tree{
    constructor(x,y){
        var options={
            isStatic:false,
        }
this.bottomTree=Bodies.rectangle(x,y,450,600,options);
this.leftTree=Bodies.rectangle(x,y-250,450,600,options);
this.rightTree=Bodies.rectangle(x+250,450,600,options);

this.width=30
this.height=30;
World.add(world,this.this.bottomTree);
World.add(world,this.this.leftTree);
World.add(world,this.this.rightTree);

    }
    display()
	{
			var posb=this.bottomTree.position;
			push()
			translate(posb.x, posb.y);
			fill(255)
			imageMode(CENTER);
			image(this.image,300,450,600);
			pop()
			
	}
}
