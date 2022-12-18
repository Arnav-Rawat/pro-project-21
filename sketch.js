
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
var groundObj;
var leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    var trash_options ={
		isStatic:false,
        density:1.2,
		friction: 0,
		restitution: 0.3
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   trash = Bodies.circle(260,100,20,trash_options);
   World.add(world, trash);
	Engine.run(engine);
  groundObj= new ground(width/2, 670,width,20);
  leftSide = new ground(1100,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(trash.positionx,trash.position.y,20);
  drawSprites();
 groundObj.display();
 leftSide.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(trash, x, -0.64)
	}
}

