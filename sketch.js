
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, ground;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
	paperObject = new Paper(200,200,20);
  box1 = new Dustbin(600,600,200,200);

    fill("white");
    ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
    World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  paperObject.display();
  box1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.position,{x:30, y:-70})
	 }
   }