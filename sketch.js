
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyIMG;
var stone1;
var mango1,mango2,mango3,mango4,mango5;



function preload()
{
	boyIMG=loadImage('Plucking Mangoes/boy.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here.

	
	tree1= new Tree()

	stone1=new Stone(210,65,50,50);

	mango1=new Mango(400,300,30);
	mango2=new Mango(300,400,30);
	mango3=new Mango(250,300,30);
	mango4= new Mango(300,250,30);

	launcherObject=new Launcher(stone1.body,{x:210,y:610})
    
	

	
	

    
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  imageMode(CENTER);
image(boyIMG,200,600,45,45);


  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  tree1.display();
  launcherObject.display();

  

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango5);
 
 
}
function keyPressed(){
if(keyCode===32){
		Matter.body.setPosition(stone1.body,{x:235,y:420});
		launcherObject.attach(stone1.body);
	}
}
function detectCollision(rock,fruit){
      var mangoPos=fruit.body.position;
	  var stonePos=rock.body.position;

	  //pythagorean theroem
      var distance=Math.sqrt((fruit.x-rock.x)^2+(fruit.y-rock.y)^2);
	  
	  //this is because if the collision will have externally tangent bodies or intersecting bodies 
	  if(distance<=50+30){
		  Matter.Body.setStatic(fruit.body,false)  
		}
}


