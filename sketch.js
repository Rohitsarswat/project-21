
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball, ball_options;
var wall1, wall2

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,490,1000,10);
	wall1 = new Ground(650,448,10,75)
	wall2 = new Ground(800,448,10,75)



	ball_options = {
		isStatic:false,
		restitution : 0.3,
		friction:0,
		//density:1.2,
		
		
	  }	

	fill("white")
	ball = Bodies.circle(200,50,20,ball_options)
  	World.add(world,ball)
		


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();	
  wall1.display();
  wall2.display();



  ellipse(ball.position.x,ball.position.y,20)
  
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}





