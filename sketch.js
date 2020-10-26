
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boy_Img;

function preload()
{
	boy_Img = loadImage("images_1234/boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(140,610,20,20);
	boy.addImage("the image itself", boy_Img);
	boy.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,40)

	stone = new realStone(700,500, 50, 50);

	slingshot = new Slingshot(stone.body, {x: 80, y:560});

	mango1 = new Mango(200,100,50,50)



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255,204,205);
 

  ground.display();
  
  stone.display();

  slingshot.display();
  
  mango1.display();

  tree.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.flying();
}